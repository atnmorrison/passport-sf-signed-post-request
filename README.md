# Passport SF Signed Post Request

Provides a strategy implementation for passport for Salesforce's canvas app signed post request authentication mechanism. This strategy is meant to be used with a cookie based user session and a server side session store such as redistogo



To use this authentication strategy you need a salesforce instance. You can sign up for a free edition for development at [https://developer.salesforce.com/](https://developer.salesforce.com/)

Once you have your salesforce instance you can create canvas app by going to **Setup > App Manager** and clicking the **New Connected App** 

In the canvas app:

1. make sure that Oauth Settings and enabled for the connected app [oauth settings](https://github.com/atnmorrison/passport-sf-signed-post-request/blob/main/images/oauth_settings.png)
2. make sure Canvas App Settings are enabled and select Signed Request (POST) as the Access Method [canvas settings](https://github.com/atnmorrison/passport-sf-signed-post-request/blob/main/images/canvas_settings.png)
3. save the connected app then click the **Manage** button. Ensure that in OAuth Policies "Permitted Users" is set to "Admin approved users are pre-authorized" **NOTE that if your org is setup with restricted apis you may need to toggle this on and off even if it already shows "Admin approved users are pre-authorized**

