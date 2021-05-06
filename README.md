# Passport SF Signed Post Request

Provides a strategy implementation for passport for Salesforce's canvas app signed post request authentication mechanism. This strategy is meant to be used with a cookie based user session and a server side session store such as redistogo

To use this authentication strategy you need a salesforce instance. You can sign up for a free edition for development at [https://developer.salesforce.com/](https://developer.salesforce.com/)

Once you have your salesforce instance you can create canvas app by going to **Setup > App Manager** and clicking the **New Connected App** 

In the canvas app:

1. make sure that Oauth Settings are enabled for the connected app 
![oauth settings](https://github.com/atnmorrison/passport-sf-signed-post-request/blob/main/images/oauth_settings.png?raw=true)
2. make sure Canvas App Settings are enabled and select Signed Request (POST) as the Access Method 
![canvas settings](https://github.com/atnmorrison/passport-sf-signed-post-request/blob/main/images/canvas_settings.png?raw=true)
3. save the connected app then click the **Manage** button. Ensure that in OAuth Policies "Permitted Users" is set to "Admin approved users are pre-authorized" **NOTE that if your org is setup with API Access Control enabled the app will show "Admin approved users are pre-authorized" and it won't be editible. Don't be fooled it isn't actually set to that you'll need to disable API Access Control temporarily and when you go back to the policy settings of your connected app you'll see that is in fact set to allow users to self authorize. Change it and save, then you can turn API Access Control back on**

You can checkout out an example express app that uses the passport strategy here

[https://github.com/atnmorrison/canvasexample1/](https://github.com/atnmorrison/canvasexample1) 

Note that for it to run locally you'll need to create a security folder in your forked project with a self signed certificate for SSL. The reason for this is that for canvas to work you need your cookie to use sameSite: "none", and to use that you must use a secure cookie, and to use a secure cookie you must use SSL.

You can follow the excellent instructions to get it up and running in the top answer of this stack overflow 

[https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node](https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node) 



