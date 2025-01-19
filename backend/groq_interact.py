import os
from groq import Groq

prompt = "Write YES or NO with spaces between if the following is true about the image (there should be 6 in total): the animal is not on the floor, the animal is eating food, the animal is excrementing or urinating, the animal is scratching an object, the animal is doing something else it should not be, the animal is demonstrating inappropriate behaviour"

def call_groq(base64_data):
    client = Groq(
        api_key=os.getenv('GROQ_API_KEY')
    )

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
        temperature=0,
#        max_completion_tokens=1024,
#        top_p=1,
#        stream=False,
#        stop=None,
    )

    return completion.choices[0].message.content
