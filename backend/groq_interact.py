import os

from groq import Groq
prompt = "Check if pet is not on floor, is eating food, is excrementing or urinating, is scratching an object or doing anything it should not be doing. If so, print YES first then a summary of what the pet(s) are doing"
start = False
client = Groq(
    api_key=os.getenv('GROQ_API_KEY')
)

def call_groq(base64_data):
    completion = client.chat.completions.create(
        model="llama-3.2-90b-vision-preview",
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": prompt
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{base64_data}",
                        }
                    }
                ]
            }
        ],
#        temperature=1,
#        max_completion_tokens=1024,
#        top_p=1,
#        stream=False,
#        stop=None,
    )

    return completion.choices[0].message.content
