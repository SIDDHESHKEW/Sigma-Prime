import google.generativeai as genai

genai.configure(api_key="AIzaSyDBVKyfFScsKoLoZd-EDTETvIDqM7DwKrI")

model = genai.GenerativeModel("gemini-1.5-flash")

response = model.generate_content("Explain how AI works in a few words")

print(response.text)