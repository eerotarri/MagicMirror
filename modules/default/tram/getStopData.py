import requests
import time
import os
from requests.auth import HTTPBasicAuth

# URL for the SIRI Realtime API endpoint
url = "https://data.waltti.fi/tampere/api/sirirealtime/v1.3/ws"

# Headers to use in the HTTP request
headers = {'Content-Type': 'application/xml'}

# Endless loop / needs to be terminated by closing terminal
while True:
    # Open the XML data file in binary read mode
    with open('./modules/default/tram/data.xml', 'rb') as f:

      # Read the contents of the file into a variable
        xml_data = f.read()

    # Send an HTTP POST request to the API endpoint
    # Include the XML data and headers as request data
    # Use HTTP basic authentication with the CLIENT_ID and CLIENT_SECRET environment variables as the username and password
    # Currently using environment variables so personal data won't get exposed
    # but if you are not about to push to repository you might as well hard code your client secrets.
    # Read more about obtaining client id and secret here: http://dev.publictransport.tampere.fi
    response = requests.post(url, data=xml_data, headers=headers, auth=HTTPBasicAuth(os.getenv('CLIENT_ID'), os.getenv('CLIENT_SECRET')))

    # Open the response XML file in binary write mode
    with open('./modules/default/tram/resp.xml', 'wb') as f:
        # Write the response text to the file, encoding it as UTF-8
        f.write(response.text.encode('utf-8'))

    time.sleep(30) # 30 second timer to limit resource usage
