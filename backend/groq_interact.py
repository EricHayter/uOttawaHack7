import os

from groq import Groq
prompt = "Write YES or NO with spaces between if the following is true about the image (there should be 6 in total): the animal is not on the floor, the animal is eating food, the animal is excrementing or urinating, the animal is scratching an object, the animal is doing something else it should not be, the animal is demonstrating inappropriate behaviour"
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
        temperature=0,
#        max_completion_tokens=1024,
#        top_p=1,
#        stream=False,
#        stop=None,
    )

    return completion.choices[0].message.content

def call_groq_audio(sound_file):

    # Specify the path to the audio file
    filename = os.path.dirname(__file__) + sound_file # Replace with your audio file!

    # Open the audio file
    with open(filename, "rb") as file:
        # Create a transcription of the audio file
        transcription = client.audio.transcriptions.create(
        file=(filename, file.read()), # Required audio file
        model="whisper-large-v3-turbo", # Required model to use for transcription
        response_format="json",  # Optional
        temperature=0.0
        )
        # Print the transcription text
        transcription =transcription.text
        #print(transcription)
    
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": "Write YES or NO with spaces between the words if the following is true about the text (3 in total): the animal is angry, the animal is sad, the animal is in distress. Here is the transcription: " + transcription + ". If there is no transcription provided write NO NO NO",
            }
        ],
        model="llama-3.3-70b-versatile",
        temperature = 0.0,
    )
    return chat_completion.choices[0].message.content