# -*- coding: utf-8 -*-
"""
Created on Fri Mar 21 16:57:25 2025

@author: lixia
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv
import os
import json
import re

load_dotenv()

app = Flask(__name__)
CORS(app)

#Retrieving API key from .env file
API_key = os.getenv("bizgenerator_api_key")
if not API_key:
    print("API key is missing. Check your .env file.")
else:
    print("API key loaded successfully.")

genai.configure(api_key=API_key)

#Defining input into Gemini AI
def generate_business_idea(industry, description, name_style, slogan_styles):
    if not industry or not description:
        return {"error": "Missing industry or description."}

    prompt = f"""
    Generate 10 unique business names and slogans for a company.
    - Industry: {industry}
    - Business Description: {description}
    - Name Style: {name_style}
    - Slogan Styles: {', '.join(slogan_styles)}

    ONLY return a valid JSON array. No extra text, no explanations.

    Example:
    [
        {{"business_name": "First Business Name", "slogan": "First Slogan"}},
        {{"business_name": "Second Business Name", "slogan": "Second Slogan"}}
    ]
    """

    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)

        if response and hasattr(response, "text"):
            response_text = response.text.strip()
            print("Raw AI Response:", response_text) 

            response_text = re.sub(r"^```(?:json)?|```$", "", response_text).strip()

            try:
                response_json = json.loads(response_text) 
                
                if isinstance(response_json, list):
                    cleaned_results = [
                        {"business_name": item.get("business_name", ""), "slogan": item.get("slogan", "")}
                        for item in response_json
                        if isinstance(item, dict)  
                    ]
                    return cleaned_results

            except json.JSONDecodeError:
                return {"error": "Failed to parse AI response as JSON."}

        return {"error": "No response generated."}

    except Exception as e:
        return {"error": str(e)}

@app.route('/')
def home():
    return "Welcome to the Business Name Generator!"

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.get_json()
        print("Received request data:", data) 

        if not data:
            return jsonify({"error": "Invalid request. Please send JSON data."}), 400

        industry = data.get("industry", "").strip()
        description = data.get("description", "").strip()
        name_style = data.get("name_style", "Creative").strip()
        slogan_styles = data.get("slogan_styles", ["Catchy"])

        print("Processing request with:", industry, description, name_style, slogan_styles)

        if isinstance(slogan_styles, str):
            slogan_styles = [slogan_styles]

        if not industry or not description:
            return jsonify({"error": "Industry and description are required."}), 400

        results = generate_business_idea(industry, description, name_style, slogan_styles)

        print("Generated Results:", results)  
        return jsonify({"results": results})

    except Exception as e:
        print("Error occurred:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False, port=5001)


