# /usr/bin/env python
# Download the twilio-python library from http://twilio.com/docs/libraries
from twilio.rest import Client

# Find these values at https://twilio.com/user/account
account_sid = "ACd2b2d733a77055bc0ec5c76a6afc6cc8"
auth_token = "2e7ee3099136ff465de7c4e8009ef0a2"
client = Client(account_sid, auth_token)

message = client.api.account.messages.create(to="+14159199803",
                                             from_="+17377779819",
                                             body="Hello there!")