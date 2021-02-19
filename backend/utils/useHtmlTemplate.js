const useHtmlTemplate = ({ type, token, user, order, baseUrl, mailList }) => {
	switch (type) {
		case 'VERIFY_USER':
			return [
				user.email,
				`Verify Email Address for SupaSteer Australia`,
				`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
          <head> </head>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="x-apple-disable-message-reformatting" />
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <!--<![endif]-->
            <style type="text/css">
              * {
                text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
              }
        
              html {
                height: 100%;
                width: 100%;
              }
        
              body {
                height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                mso-line-height-rule: exactly;
              }
        
              div[style*="margin: 16px 0"] {
                margin: 0 !important;
              }
        
              table,
              td {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              }
        
              img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
                -ms-interpolation-mode: bicubic;
              }
        
              .ReadMsgBody,
              .ExternalClass {
                width: 100%;
              }
        
              .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass td,
              .ExternalClass div {
                line-height: 100%;
              }
            </style>
            <!--[if gte mso 9]>
              <style type="text/css">
              li { text-indent: -1em; }
              table td { border-collapse: collapse; }
              </style>
              <![endif]-->
            <title> </title>
            <!-- content -->
            <!--[if gte mso 9]><xml>
               <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
               </o:OfficeDocumentSettings>
              </xml><![endif]-->
          </head>
          <body class="body" style="background-color: #FAFAFA; margin: 0; width: 100%;">
            <table class="bodyTable" role="presentation" width="100%" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #FAFAFA; margin: 0;" bgcolor="#FAFAFA">
              <tr>
                <td class="body__content" align="left" width="100%" valign="top" style="color: #000000; font-size: 16px; line-height: 20px; font-family: Helvetica,Arial,sans-serif;">
                  <div class="header" style="background-color: #E0E0E0; height: 90px; width: 100%; color: #000000; font-family: Helvetica,Arial,sans-serif;">
                    <div class="container" style="margin: 0 auto; max-width: 600px; width: 100%;"> <!--[if mso | IE]>
                      <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                        <tr>
                          <td> <![endif]-->
                            <table class="container__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                              <tr class="container__row">
                                <td class="container__cell" width="100%" align="left" valign="top">
                                  <div class="row">
                                    <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                      <tr class="row__row"> <a class="logo-link a" large="12" href="${baseUrl}" style="text-decoration: none; color: #000000;"><span class="a__text" style="text-decoration: none; color: #000000;">
                  <img class="logo img__block" src="${baseUrl}/resources/logo.png" alt="
            SupaSteer
               Australia" border="0" style="display: block; max-width: 100%; white-space: pre; margin-top: 4px; margin-left: 10px; font-size: 20px;"/>
                  </span></a> </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table> <!--[if mso | IE]> </td>
                        </tr>
                      </table> <![endif]--> </div>
                  </div>
                  <div class="container" style="margin: 0 auto; max-width: 600px; width: 100%;"> <!--[if mso | IE]>
                    <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                      <tr>
                        <td> <![endif]-->
                          <table class="container__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                            <tr class="container__row">
                              <td class="container__cell" width="100%" align="left" valign="top">
                                <div class="content row" style="background-color: #FFFFFF; border: 1px solid #E0E0E0; border-radius: 8px; margin: 10px; padding: 20px;">
                                  <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                    <tr class="row__row">
                                      <td class="column col-sm-12" width="600" style="width: 100%" align="left" valign="top">
                                        <h1 class="title header h1" style="margin: 20px 0; line-height: 40px; width: 100%; color: #000000; font-family: Helvetica,Arial,sans-serif; padding-left: 10px; margin-bottom: 20px; margin-top: 0; height: min-content; background-color: #FFFFFF; font-weight: 500;">Hi ${user.name},</h1>
                                        <p class="content-text text p" style="display: block; color: #000000; font-size: 16px; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0 15px; margin: 0 0 5px;"> Thanks for registering an account at SupaSteer.com! </p>
                                        <p class="content-text text p" style="display: block; color: #000000; font-size: 16px; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0 15px; margin: 0 0 5px;">
                                        Please click below to confirm your email address: </p>
                                        <div class="secondary-button button" style="background-color: #48AA43; margin: 15px auto;">
                                          <table role="presentation" width="100%" align="left" border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                              <td>
                                                <table role="presentation" width="auto" align="center" border="0" cellspacing="0" cellpadding="0" class="button__table" style="margin: 15px auto;">
                                                  <tr>
                                                    <td align="center" class="button__cell" style="border-radius: 3px; padding: 6px 12px; background-color: #48AA43;" bgcolor="#48AA43"><a href="${baseUrl}/verify/${token}" class="button__link" style="color: #FFFFFF; text-decoration: none; background-color: #48AA43; display: inline-block;"><span class="button__text" style="color: #FFFFFF; text-decoration: none;">
                    Verify Email
                  </span></a></td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </table> <!--[if mso | IE]> </td>
                      </tr>
                    </table> <![endif]--> </div>
                  <div class="footer" style="background-color: #E0E0E0; height: min-content; width: 100%;">
                    <div class="container" style="margin: 0 auto; max-width: 600px; width: 100%;"> <!--[if mso | IE]>
                      <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                        <tr>
                          <td> <![endif]-->
                            <table class="container__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                              <tr class="container__row">
                                <td class="container__cell" width="100%" align="left" valign="top">
                                  <div class="footer-row row" style="padding: 10px 25px;">
                                    <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                      <tr class="row__row">
                                        <p class="footer-text text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0;">This email was sent by SupaSteer Australia, 11 Valley road, Wonga Park VIC 3115.</p>
                                        <p class="footer-text text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0;">Make sure you add noreply@supasteer.com to your address book and safe list.</p>
                                        <p class="footer-text text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0;">You have received this email as your email address was used to register an account at SupaSteer.com, this not a promotional email.</p>
                                        <p class="footer-text text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0;">Emails to this address will not be responded to. If you need any further information feel free to call on (03) 9722-0886</p>
                                        <p class="footer-center text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0; text-align: center;">&copy; Copyright 2020, SupaSteer Australia</p>
                                        <p class="footer-center text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0; text-align: center;">Designed and developed by <a class="link a" href="#" style="color: #026A97; text-decoration: none;"><span class="a__text" style="color: #026A97; text-decoration: none;">Apex Apps</span></a></p>
                                        <p class="footer-center text p"
                                          large="6" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0; text-align: center;"><a class="link a" href="${baseUrl}/terms" style="color: #026A97; text-decoration: none;"><span class="a__text" style="color: #026A97; text-decoration: none;">Terms and Conditions</span></a></p>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table> <!--[if mso | IE]> </td>
                        </tr>
                      </table> <![endif]--> </div>
                  </div>
                </td>
              </tr>
            </table>
            <div style="display:none; white-space:nowrap; font-size:15px; line-height:0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
          </body>
        </html>`
			];
		case 'FORGOT_PASSWORD':
			return [
				user.email,
				`Reset Password for your SupaSteer Account`,
				`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
          <head> </head>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="x-apple-disable-message-reformatting" />
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <!--<![endif]-->
            <style type="text/css">
              * {
                text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
              }
        
              html {
                height: 100%;
                width: 100%;
              }
        
              body {
                height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                mso-line-height-rule: exactly;
              }
        
              div[style*="margin: 16px 0"] {
                margin: 0 !important;
              }
        
              table,
              td {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              }
        
              img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
                -ms-interpolation-mode: bicubic;
              }
        
              .ReadMsgBody,
              .ExternalClass {
                width: 100%;
              }
        
              .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass td,
              .ExternalClass div {
                line-height: 100%;
              }
            </style>
            <!--[if gte mso 9]>
              <style type="text/css">
              li { text-indent: -1em; }
              table td { border-collapse: collapse; }
              </style>
              <![endif]-->
            <title> </title>
            <!-- content -->
            <!--[if gte mso 9]><xml>
               <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
               </o:OfficeDocumentSettings>
              </xml><![endif]-->
          </head>
          <body class="body" style="background-color: #FAFAFA; margin: 0; width: 100%;">
            <table class="bodyTable" role="presentation" width="100%" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #FAFAFA; margin: 0;" bgcolor="#FAFAFA">
              <tr>
                <td class="body__content" align="left" width="100%" valign="top" style="color: #000000; font-size: 16px; line-height: 20px; font-family: Helvetica,Arial,sans-serif;">
                  <div class="header" style="background-color: #E0E0E0; height: 90px; width: 100%; color: #000000; font-family: Helvetica,Arial,sans-serif;">
                    <div class="container" style="margin: 0 auto; max-width: 600px; width: 100%;"> <!--[if mso | IE]>
                      <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                        <tr>
                          <td> <![endif]-->
                            <table class="container__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                              <tr class="container__row">
                                <td class="container__cell" width="100%" align="left" valign="top">
                                  <div class="row">
                                    <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                      <tr class="row__row"> <a class="logo-link a" large="12" href="${baseUrl}" style="text-decoration: none; color: #000000;"><span class="a__text" style="text-decoration: none; color: #000000;">
                  <img class="logo img__block" src="${baseUrl}/resources/logo.png" alt="
            SupaSteer
               Australia" border="0" style="display: block; max-width: 100%; white-space: pre; margin-top: 4px; margin-left: 10px; font-size: 20px;"/>
                  </span></a> </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table> <!--[if mso | IE]> </td>
                        </tr>
                      </table> <![endif]--> </div>
                  </div>
                  <div class="container" style="margin: 0 auto; max-width: 600px; width: 100%;"> <!--[if mso | IE]>
                    <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                      <tr>
                        <td> <![endif]-->
                          <table class="container__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                            <tr class="container__row">
                              <td class="container__cell" width="100%" align="left" valign="top">
                                <div class="content row" style="background-color: #FFFFFF; border: 1px solid #E0E0E0; border-radius: 8px; margin: 10px; padding: 20px;">
                                  <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                    <tr class="row__row">
                                      <td class="column col-sm-12" width="600" style="width: 100%" align="left" valign="top">
                                        <h1 class="title header h1" style="margin: 20px 0; line-height: 40px; width: 100%; color: #000000; font-family: Helvetica,Arial,sans-serif; padding-left: 10px; margin-bottom: 20px; margin-top: 0; height: min-content; background-color: #FFFFFF; font-weight: 500;">Hi ${user.name},</h1>
                                        <p class="content-text text p" style="display: block; color: #000000; font-size: 16px; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0 15px; margin: 0 0 5px;"> Forgot your password? No worries!</p>
                                        <p class="content-text text p" style="display: block; color: #000000; font-size: 16px; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0 15px; margin: 0 0 5px;">
                                        Please click the button below to reset your password.</p>
                                        <div class="secondary-button button" style="background-color: #48AA43; margin: 15px auto;">
                                          <table role="presentation" width="100%" align="left" border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                              <td>
                                                <table role="presentation" width="auto" align="center" border="0" cellspacing="0" cellpadding="0" class="button__table" style="margin: 15px auto;">
                                                  <tr>
                                                    <td align="center" class="button__cell" style="border-radius: 3px; padding: 6px 12px; background-color: #48AA43;" bgcolor="#48AA43"><a href="${baseUrl}/resetpassword/${token}" class="button__link" style="color: #FFFFFF; text-decoration: none; background-color: #48AA43; display: inline-block;"><span class="button__text" style="color: #FFFFFF; text-decoration: none;">
                    Reset Password
                  </span></a></td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </table> <!--[if mso | IE]> </td>
                      </tr>
                    </table> <![endif]--> </div>
                  <div class="footer" style="background-color: #E0E0E0; height: min-content; width: 100%;">
                    <div class="container" style="margin: 0 auto; max-width: 600px; width: 100%;"> <!--[if mso | IE]>
                      <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                        <tr>
                          <td> <![endif]-->
                            <table class="container__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                              <tr class="container__row">
                                <td class="container__cell" width="100%" align="left" valign="top">
                                  <div class="footer-row row" style="padding: 10px 25px;">
                                    <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                      <tr class="row__row">
                                        <p class="footer-text text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0;">This email was sent by SupaSteer Australia, 11 Valley road, Wonga Park VIC 3115.</p>
                                        <p class="footer-text text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0;">Make sure you add noreply@supasteer.com to your address book and safe list.</p>
                                        <p class="footer-text text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0;">You have received this email as you requested to reset your password at SupaSteer.com, this not a promotional email.</p>
                                        <p class="footer-text text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0;">Emails to this address will not be responded to. If you need any further information feel free to call on (03) 9722-0886</p>
                                        <p class="footer-center text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0; text-align: center;">&copy; Copyright 2020, SupaSteer Australia</p>
                                        <p class="footer-center text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0; text-align: center;">Designed and developed by <a class="link a" href="#" style="color: #026A97; text-decoration: none;"><span class="a__text" style="color: #026A97; text-decoration: none;">Apex Apps</span></a></p>
                                        <p class="footer-center text p"
                                          large="6" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0; text-align: center;"><a class="link a" href="${baseUrl}/terms" style="color: #026A97; text-decoration: none;"><span class="a__text" style="color: #026A97; text-decoration: none;">Terms and Conditions</span></a></p>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table> <!--[if mso | IE]> </td>
                        </tr>
                      </table> <![endif]--> </div>
                  </div>
                </td>
              </tr>
            </table>
            <div style="display:none; white-space:nowrap; font-size:15px; line-height:0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
          </body>
        </html>`
			];
		case 'CONFIRM_ORDER':
			return [
				user.email,
				`Order Confirmation for order #${order._id}`,
				`
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
<html
	lang="en"
	xmlns="http://www.w3.org/1999/xhtml"
	xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office"
>
	<head> </head>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="x-apple-disable-message-reformatting" />
		<!--[if !mso]><!-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<!--<![endif]-->
		<style type="text/css">
			* {
				text-size-adjust: 100%;
				-ms-text-size-adjust: 100%;
				-moz-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}

			html {
				height: 100%;
				width: 100%;
			}

			body {
				height: 100% !important;
				margin: 0 !important;
				padding: 0 !important;
				width: 100% !important;
				mso-line-height-rule: exactly;
			}

			div[style*='margin: 16px 0'] {
				margin: 0 !important;
			}

			table,
			td {
				mso-table-lspace: 0pt;
				mso-table-rspace: 0pt;
			}

			img {
				border: 0;
				height: auto;
				line-height: 100%;
				outline: none;
				text-decoration: none;
				-ms-interpolation-mode: bicubic;
			}

			.ReadMsgBody,
			.ExternalClass {
				width: 100%;
			}

			.ExternalClass,
			.ExternalClass p,
			.ExternalClass span,
			.ExternalClass td,
			.ExternalClass div {
				line-height: 100%;
			}
		</style>
		<!--[if gte mso 9]>
			<style type="text/css">
				li {
					text-indent: -1em;
				}
				table td {
					border-collapse: collapse;
				}
			</style>
		<![endif]-->
		<title> </title>
		<style>
			@media only screen and (max-width: 600px) {
				.col-sm-4 {
					display: block;
					width: 33% !important;
				}
				.column,
				.column-filler {
					box-sizing: border-box;
					float: left;
				}
				.col-sm-8 {
					display: block;
					width: 67% !important;
				}
			}
		</style>
		<!-- content -->
		<!--[if gte mso 9
			]><xml>
				<o:OfficeDocumentSettings>
					<o:AllowPNG />
					<o:PixelsPerInch>96</o:PixelsPerInch>
				</o:OfficeDocumentSettings>
			</xml><!
		[endif]-->
	</head>
	<body class="body" style="background-color: #fafafa; margin: 0; width: 100%">
		<table
			class="bodyTable"
			role="presentation"
			width="100%"
			align="left"
			border="0"
			cellpadding="0"
			cellspacing="0"
			style="width: 100%; background-color: #fafafa; margin: 0"
			bgcolor="#FAFAFA"
		>
			<tr>
				<td
					class="body__content"
					align="left"
					width="100%"
					valign="top"
					style="
						color: #000000;
						font-size: 16px;
						line-height: 20px;
						font-family: Helvetica, Arial, sans-serif;
					"
				>
					<div
						class="header"
						style="
							background-color: #e0e0e0;
							height: 90px;
							width: 100%;
							color: #000000;
							font-family: Helvetica, Arial, sans-serif;
						"
					>
						<div
							class="container"
							style="margin: 0 auto; max-width: 600px; width: 100%"
						>
							<!--[if mso | IE]>
              <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                <tr>
                  <td> <![endif]-->
							<table
								class="container__table"
								role="presentation"
								border="0"
								align="center"
								cellpadding="0"
								cellspacing="0"
								width="100%"
							>
								<tr class="container__row">
									<td
										class="container__cell"
										width="100%"
										align="left"
										valign="top"
									>
										<div class="row">
											<table
												class="row__table"
												width="100%"
												align="center"
												role="presentation"
												border="0"
												cellpadding="0"
												cellspacing="0"
												style="table-layout: fixed"
											>
												<tr class="row__row">
													<a large="12" href="#" class="a"
														><span class="a__text">
															<img
																class="logo img__block"
																src="${baseUrl}/resources/logo.png"
																alt="
    SupaSteer
       Australia"
																border="0"
																style="
																	display: block;
																	max-width: 100%;
																	white-space: pre;
																	margin-top: 4px;
																	margin-left: 10px;
																	font-size: 20px;
																"
															/> </span
													></a>
												</tr>
											</table>
										</div>
									</td>
								</tr>
							</table>
							<!--[if mso | IE]> </td>
                </tr>
              </table> <![endif]-->
						</div>
					</div>
					<div
						class="container"
						style="margin: 0 auto; max-width: 600px; width: 100%"
					>
						<!--[if mso | IE]>
            <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
              <tr>
                <td> <![endif]-->
						<table
							class="container__table"
							role="presentation"
							border="0"
							align="center"
							cellpadding="0"
							cellspacing="0"
							width="100%"
						>
							<tr class="container__row">
								<td
									class="container__cell"
									width="100%"
									align="left"
									valign="top"
								>
									<div
										class="content row"
										style="
											background-color: #ffffff;
											border: 1px solid #e0e0e0;
											border-radius: 8px;
											margin: 10px;
											padding: 20px;
										"
									>
										<table
											class="row__table"
											width="100%"
											align="center"
											role="presentation"
											border="0"
											cellpadding="0"
											cellspacing="0"
											style="table-layout: fixed"
										>
											<tr class="row__row">
												<td
													class="column col-sm-12"
													width="600"
													style="width: 100%"
													align="left"
													valign="top"
												>
													<div class="row">
														<table
															class="row__table"
															width="100%"
															align="center"
															role="presentation"
															border="0"
															cellpadding="0"
															cellspacing="0"
															style="table-layout: fixed"
														>
															<tr class="row__row">
																<td
																	class="column col-sm-12"
																	width="600"
																	style="width: 100%"
																	align="left"
																	valign="top"
																>
																	<h1
																		class="title header h1"
																		style="
																			margin: 20px 0;
																			line-height: 40px;
																			width: 100%;
																			color: #000000;
																			font-family: Helvetica, Arial, sans-serif;
																			padding-left: 10px;
																			margin-bottom: 20px;
																			margin-top: 0;
																			height: min-content;
																			background-color: #ffffff;
																			font-weight: 500;
																		"
																	>
																		Hi ${user.name},
																	</h1>
																	<p
																		class="subtitle text p"
																		style="
																			display: block;
																			color: #000000;
																			line-height: 20px;
																			font-family: Helvetica, Arial, sans-serif;
																			margin: 0;
																			padding-left: 10px;
																			font-size: 20px;
																			margin-bottom: 10px;
																		"
																	>
																		Your order has been confirmed!
																	</p>
																	<p
																		class="subtitle text p"
																		style="
																			display: block;
																			color: #000000;
																			line-height: 20px;
																			font-family: Helvetica, Arial, sans-serif;
																			margin: 0;
																			padding-left: 10px;
																			font-size: 20px;
																			margin-bottom: 10px;
																		"
																	>
																		Thank you for shopping with SupaSteer
																		Australia.
																	</p>
																</td>
															</tr>
														</table>
													</div>
													<div
														class="section row"
														style="
															border-top: 1px solid #e0e0e0;
															margin-top: 20px;
															padding: 15px 15px 5px;
														"
													>
														<table
															class="row__table"
															width="100%"
															align="center"
															role="presentation"
															border="0"
															cellpadding="0"
															cellspacing="0"
															style="table-layout: fixed"
														>
															<tr class="row__row">
																<td
																	class="column col-sm-12"
																	width="600"
																	style="width: 100%"
																	align="left"
																	valign="top"
																>
																	<p
																		class="view-order-text text p"
																		style="
																			display: block;
																			color: #000000;
																			font-size: 16px;
																			line-height: 20px;
																			font-family: Helvetica, Arial, sans-serif;
																			max-width: 400px;
																			margin: 10px auto 0;
																			text-align: center;
																		"
																	>
																		You can track your order by clicking the button below,
																		this order is also listed in your Profile at
																		SupaSteer.com
																	</p>
																	<div
																		class="secondary-button button"
																		style="
																			background-color: #48aa43;
																			margin-top: 10px;
																		"
																	>
																		<table
																			role="presentation"
																			width="100%"
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																		>
																			<tr>
																				<td>
																					<table
																						role="presentation"
																						width="auto"
																						align="center"
																						border="0"
																						cellspacing="0"
																						cellpadding="0"
																						class="button__table"
																						style="
																							margin: 0 auto;
																							margin-top: 10px;
																						"
																					>
																						<tr>
																							<td
																								align="center"
																								class="button__cell"
																								style="
																									border-radius: 3px;
																									padding: 6px 12px;
																									background-color: #48aa43;
																								"
																								bgcolor="#48AA43"
																							>
																								<a
																									href="${baseUrl}/order/${order._id}"
																									class="button__link"
																									style="
																										color: #ffffff;
																										text-decoration: none;
																										background-color: #48aa43;
																										display: inline-block;
																									"
																									><span
																										class="button__text"
																										style="
																											color: #ffffff;
																											text-decoration: none;
																										"
																										>View Your Order Online</span
																									></a
																								>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</div>
																</td>
															</tr>
														</table>
													</div>
													<div
														class="section row"
														style="
															border-top: 1px solid #e0e0e0;
															margin-top: 20px;
															padding: 15px 15px 5px;
														"
													>
														<table
															class="row__table"
															width="100%"
															align="center"
															role="presentation"
															border="0"
															cellpadding="0"
															cellspacing="0"
															style="table-layout: fixed"
														>
															<tr class="row__row">
																<td
																	class="column col-sm-12"
																	width="600"
																	style="width: 100%"
																	align="left"
																	valign="top"
																>
																	<h2
																		class="header h2"
																		style="
																			line-height: 30px;
																			width: 100%;
																			color: #000000;
																			font-family: Helvetica, Arial, sans-serif;
																			height: min-content;
																			background-color: #ffffff;
																			font-weight: 500;
																			margin: 0;
																		"
																	>
																		Order Details:
																	</h2>
																</td>
															</tr>
														</table>
                          </div>
                          ${order.orderItems.map(
														item =>
															` <div
														class="order-item row"
														style="
															border-radius: 0;
															border-top: 1px solid #616161;
															margin: 10px 20px 0;
															padding-left: 5px;
															padding-top: 10px;
														"
													>
														<table
															class="row__table"
															width="100%"
															align="center"
															role="presentation"
															border="0"
															cellpadding="0"
															cellspacing="0"
															style="table-layout: fixed"
														>
															<tr class="row__row">
																<td
																	class="column col-sm-4"
																	width="150"
																	style="width: 25%"
																	align="left"
																	valign="top"
																>
																	<img
																		class="item-image img__block"
																		src="${baseUrl}${item.image}"
																		alt="Power Steering Rack"
																		border="0"
																		style="
																			display: block;
																			max-width: 100%;
																			width: 100%;
																		"
																	/>
																</td>
																<td
																	class="item-info-column column col-sm-8"
																	width="450"
																	style="padding-left: 15px; width: 75%"
																	align="left"
																	valign="top"
																>
																	<p
																		class="item-info text p"
																		style="
																			display: block;
																			line-height: 20px;
																			font-family: Helvetica, Arial, sans-serif;
																			color: #424242;
																			font-size: 13px;
																			padding: 0;
																			margin: 0;
																		"
																	>
																		<a
																			class="item-link a"
																			href="${baseUrl}/product/${item.product}"
																			style="
																				font-weight: 500;
																				font-size: 18px;
																				color: #026a97;
																				text-decoration: none;
																			"
																			><span
																				class="a__text"
																				style="
																					color: #026a97;
																					text-decoration: none;
																				"
																				>${item.name}</span
																			></a
																		>
																	</p>
																	<p
																		class="item-info text p"
																		style="
																			display: block;
																			line-height: 20px;
																			font-family: Helvetica, Arial, sans-serif;
																			color: #424242;
																			font-size: 13px;
																			padding: 0;
																			margin: 0;
																		"
																	>
																		Price: $${item.price}
																	</p>
																	<p
																		class="item-info text p"
																		style="
																			display: block;
																			line-height: 20px;
																			font-family: Helvetica, Arial, sans-serif;
																			color: #424242;
																			font-size: 13px;
																			padding: 0;
																			margin: 0;
																		"
																	>
																		Quantity: ${item.qty}
																	</p>
																</td>
															</tr>
														</table>
													</div>`
													)}
												
													<div
														class="order-item row"
														style="
															border-radius: 0;
															border-top: 1px solid #616161;
															margin: 10px 20px 0;
															padding-left: 5px;
															padding-top: 10px;
														"
													>
														<table
															class="row__table"
															width="100%"
															align="center"
															role="presentation"
															border="0"
															cellpadding="0"
															cellspacing="0"
															style="table-layout: fixed"
														>
															<tr class="row__row">
																<td
																	class="column col-sm-4"
																	width="150"
																	style="width: 25%"
																	align="left"
																	valign="top"
																>
																	<p
																		class="text p"
																		style="
																			display: block;
																			margin: 14px 0;
																			color: #000000;
																			font-size: 16px;
																			line-height: 20px;
																			font-family: Helvetica, Arial, sans-serif;
																		"
																	></p>
																</td>
																<td
																	class="column col-sm-8"
																	width="450"
																	style="width: 75%"
																	align="left"
																	valign="top"
																>
																	<div
																		class="table-footer row"
																		style="
																			padding-left: 20px;
																			padding-right: 10px;
																		"
																	>
																		<table
																			class="row__table"
																			width="100%"
																			align="center"
																			role="presentation"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			style="table-layout: fixed"
																		>
																			<tr class="row__row">
																				<td
																					class="total-column column col-sm-6"
																					width="225"
																					style="
																						margin: 0;
																						padding: 0;
																						width: 50%;
																					"
																					align="left"
																					valign="top"
																				>
																					<p
																						class="total text p"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							font-family: Helvetica, Arial,
																								sans-serif;
																							width: min-content;
																							padding: 0;
																							color: #424242;
																							display: block;
																							margin: 0;
																						"
																					>
																						GST
																					</p>
																				</td>
																				<td
																					class="price-column column col-sm-6"
																					width="225"
																					style="
																						margin: 0;
																						padding: 0;
																						width: 50%;
																					"
																					align="left"
																					valign="top"
																				>
																					<p
																						class="total-price text p"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							font-family: Helvetica, Arial,
																								sans-serif;
																							width: min-content;
																							padding: 0;
																							color: #424242;
																							display: block;
																							margin: 0;
																							margin-left: auto;
																						"
																					>
																						+$${order.taxPrice}
																					</p>
																				</td>
																			</tr>
																		</table>
																	</div>
																	<div
																		class="table-footer-total row"
																		style="
																			padding-left: 20px;
																			padding-right: 10px;
																			font-weight: 600;
																			margin-top: 10px;
																		"
																	>
																		<table
																			class="row__table"
																			width="100%"
																			align="center"
																			role="presentation"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			style="table-layout: fixed"
																		>
																			<tr class="row__row">
																				<td
																					class="total-column column col-sm-6"
																					width="225"
																					style="
																						margin: 0;
																						padding: 0;
																						width: 50%;
																					"
																					align="left"
																					valign="top"
																				>
																					<p
																						class="total text p"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							font-family: Helvetica, Arial,
																								sans-serif;
																							width: min-content;
																							padding: 0;
																							color: #424242;
																							display: block;
																							margin: 0;
																						"
																					>
																						Total:
																					</p>
																				</td>
																				<td
																					class="price-column column col-sm-6"
																					width="225"
																					style="
																						margin: 0;
																						padding: 0;
																						width: 50%;
																					"
																					align="left"
																					valign="top"
																				>
																					<p
																						class="total-price bold text p"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							font-family: Helvetica, Arial,
																								sans-serif;
																							width: min-content;
																							padding: 0;
																							color: #424242;
																							display: block;
																							margin: 0;
																							margin-left: auto;
																						"
																					>
																						$${order.totalPrice}
																					</p>
																				</td>
																			</tr>
																		</table>
																	</div>
																</td>
															</tr>
														</table>
													</div>
													<div
														class="section row"
														style="
															border-top: 1px solid #e0e0e0;
															margin-top: 20px;
															padding: 15px 15px 5px;
														"
													>
														<table
															class="row__table"
															width="100%"
															align="center"
															role="presentation"
															border="0"
															cellpadding="0"
															cellspacing="0"
															style="table-layout: fixed"
														>
															<tr class="row__row">
																<td
																	class="column col-sm-12"
																	width="600"
																	style="width: 100%"
																	align="left"
																	valign="top"
																>
																	<h2
																		class="header h2"
																		style="
																			line-height: 30px;
																			width: 100%;
																			color: #000000;
																			font-family: Helvetica, Arial, sans-serif;
																			height: min-content;
																			background-color: #ffffff;
																			font-weight: 500;
																			margin: 0;
																		"
																	>
																		${
																			order.delivery === 'delivery'
																				? 'Delivery Information'
																				: 'Pick-Up Information'
																		}
																	</h2>
																	<p
																		class="delivery-text text p"
																		style="
																			display: block;
																			color: #000000;
																			font-size: 16px;
																			line-height: 20px;
																			font-family: Helvetica, Arial, sans-serif;
																			margin: 15px;
																		"
                                  >
                                  ${
																		order.delivery === 'delivery'
																			? 'Your order will be delivered within 2-3 business days to the following Address:'
																			: 'Your order is ready to be collected from the SupaSteer Factory, located at:'
																	}
																	</p>
																	<div
																		class="address-container"
																		style="
																			border: 1px solid #e0e0e0;
																			border-radius: 8px;
																			display: block;
																			margin: 0 auto;
																			padding: 15px 25px;
																			width: min-content;
																		"
																	>
                                  ${
																		order.delivery === 'delivery'
																			? `<p
																			class="delivery-address text p"
																			style="
																				display: block;
																				color: #000000;
																				font-size: 16px;
																				line-height: 20px;
																				font-family: Helvetica, Arial,
																					sans-serif;
																				padding: 0;
																				margin: 0 0 2px;
																				white-space: nowrap;
																			"
																		>
                                    ${user.name}
                                    </p>`
																			: ``
																	}
                                  ${
																		order.delivery === 'delivery'
																			? user.formattedAddress
																					.split(',')
																					.map(
																						x =>
																							`	<p
                                    class="delivery-address text p"
                                    style="
                                      display: block;
                                      color: #000000;
                                      font-size: 16px;
                                      line-height: 20px;
                                      font-family: Helvetica;
                                      padding: 0;
                                      margin: 0 0 2px;
                                      white-space: nowrap;
                                    "
                                  >
                                    ${x}
                                  </p>`
																					)
																					.join()
																					.replace(/,/g, '')
																			: `<p
																			class="delivery-address text p"
																			style="
																				display: block;
																				color: #000000;
																				font-size: 16px;
																				line-height: 20px;
																				font-family: Helvetica, Arial,
																					sans-serif;
																				padding: 0;
																				margin: 0 0 2px;
																				white-space: nowrap;
																			"
																		>
																			SupaSteer Australia
                                    </p>
                                    <p
																			class="delivery-address text p"
																			style="
																				display: block;
																				color: #000000;
																				font-size: 16px;
																				line-height: 20px;
																				font-family: Helvetica, Arial,
																					sans-serif;
																				padding: 0;
																				margin: 0 0 2px;
																				white-space: nowrap;
																			"
																		>
																			11 Valley road
																		</p>
                                    <p
																			class="delivery-address text p"
																			style="
																				display: block;
																				color: #000000;
																				font-size: 16px;
																				line-height: 20px;
																				font-family: Helvetica, Arial,
																					sans-serif;
																				padding: 0;
																				margin: 0 0 2px;
																				white-space: nowrap;
																			"
																		>
																			Wonga Park VIC 3115
																		</p>
                                    <p
																			class="delivery-address text p"
																			style="
																				display: block;
																				color: #000000;
																				font-size: 16px;
																				line-height: 20px;
																				font-family: Helvetica, Arial,
																					sans-serif;
																				padding: 0;
																				margin: 0 0 2px;
																				white-space: nowrap;
																			"
																		>
																			Australia
																		</p>
                                    `
																	}
																	</div>
																</td>
															</tr>
														</table>
													</div>
												</td>
											</tr>
										</table>
									</div>
								</td>
							</tr>
						</table>
						<!--[if mso | IE]> </td>
              </tr>
            </table> <![endif]-->
					</div>
					<div
						class="footer"
						style="background-color: #e0e0e0; height: min-content; width: 100%"
					>
						<div
							class="container"
							style="margin: 0 auto; max-width: 600px; width: 100%"
						>
							<!--[if mso | IE]>
              <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                <tr>
                  <td> <![endif]-->
							<table
								class="container__table"
								role="presentation"
								border="0"
								align="center"
								cellpadding="0"
								cellspacing="0"
								width="100%"
							>
								<tr class="container__row">
									<td
										class="container__cell"
										width="100%"
										align="left"
										valign="top"
									>
										<div class="footer-row row" style="padding: 10px 25px">
											<table
												class="row__table"
												width="100%"
												align="center"
												role="presentation"
												border="0"
												cellpadding="0"
												cellspacing="0"
												style="table-layout: fixed"
											>
												<tr class="row__row">
													<p
														class="footer-text text p"
														large="1"
														style="
															display: block;
															line-height: 20px;
															font-family: Helvetica, Arial, sans-serif;
															padding: 0;
															color: #424242;
															font-size: 11px;
															margin: 0;
														"
													>
														This email was sent by SupaSteer Australia, 11
														Valley road, Wonga Park VIC 3115.
													</p>
													<p
														class="footer-text text p"
														large="1"
														style="
															display: block;
															line-height: 20px;
															font-family: Helvetica, Arial, sans-serif;
															padding: 0;
															color: #424242;
															font-size: 11px;
															margin: 0;
														"
													>
														Make sure you add noreply@supasteer.com to your
														address book and safe list.
													</p>
													<p
														class="footer-text text p"
														large="1"
														style="
															display: block;
															line-height: 20px;
															font-family: Helvetica, Arial, sans-serif;
															padding: 0;
															color: #424242;
															font-size: 11px;
															margin: 0;
														"
													>
														You have received this email as this is a service
														announcement and not a promotional email.
													</p>
													<p
														class="footer-text text p"
														large="1"
														style="
															display: block;
															line-height: 20px;
															font-family: Helvetica, Arial, sans-serif;
															padding: 0;
															color: #424242;
															font-size: 11px;
															margin: 0;
														"
													>
														Emails to this address will not be responded to. If
														you need any further information feel free to call
														on (03) 9722-0886
													</p>
													<p
														class="footer-center text p"
														large="1"
														style="
															display: block;
															line-height: 20px;
															font-family: Helvetica, Arial, sans-serif;
															padding: 0;
															color: #424242;
															font-size: 11px;
															margin: 0;
															text-align: center;
														"
													>
														&copy; Copyright 2020, SupaSteer Australia
													</p>
													<p
														class="footer-center text p"
														large="1"
														style="
															display: block;
															line-height: 20px;
															font-family: Helvetica, Arial, sans-serif;
															padding: 0;
															color: #424242;
															font-size: 11px;
															margin: 0;
															text-align: center;
														"
													>
														Designed and developed by
														<a
															class="link a"
															href="#"
															style="color: #026a97; text-decoration: none"
															><span
																class="a__text"
																style="color: #026a97; text-decoration: none"
																>Apex Apps</span
															></a
														>
													</p>
													<p
														class="footer-center text p"
														large="6"
														style="
															display: block;
															line-height: 20px;
															font-family: Helvetica, Arial, sans-serif;
															padding: 0;
															color: #424242;
															font-size: 11px;
															margin: 0;
															text-align: center;
														"
													>
														<a
															class="link a"
															href="${baseUrl}/terms"
															style="color: #026a97; text-decoration: none"
															><span
																class="a__text"
																style="color: #026a97; text-decoration: none"
																>Terms and Conditions</span
															></a
														>
													</p>
												</tr>
											</table>
										</div>
									</td>
								</tr>
							</table>
							<!--[if mso | IE]> </td>
                </tr>
              </table> <![endif]-->
						</div>
					</div>
				</td>
			</tr>
		</table>
		<div
			style="
				display: none;
				white-space: nowrap;
				font-size: 15px;
				line-height: 0;
			"
		>
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		</div>
	</body>
</html>

    `
			];
		case 'CANCEL_ORDER':
			return [
				user.email,
				`Sorry, Your Order Has Been Cancelled #${order._id}`,
				`
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
  <html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head> </head>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!--<![endif]-->
      <style type="text/css">
        * {
          text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
  
        html {
          height: 100%;
          width: 100%;
        }
  
        body {
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          mso-line-height-rule: exactly;
        }
  
        div[style*='margin: 16px 0'] {
          margin: 0 !important;
        }
  
        table,
        td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
  
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
  
        .ReadMsgBody,
        .ExternalClass {
          width: 100%;
        }
  
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
      </style>
      <!--[if gte mso 9]>
        <style type="text/css">
          li {
            text-indent: -1em;
          }
          table td {
            border-collapse: collapse;
          }
        </style>
      <![endif]-->
      <title> </title>
      <style>
        @media only screen and (max-width: 600px) {
          .col-sm-4 {
            display: block;
            width: 33% !important;
          }
          .column,
          .column-filler {
            box-sizing: border-box;
            float: left;
          }
          .col-sm-8 {
            display: block;
            width: 67% !important;
          }
        }
      </style>
      <!-- content -->
      <!--[if gte mso 9
        ]><xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml><!
      [endif]-->
    </head>
    <body class="body" style="background-color: #fafafa; margin: 0; width: 100%">
      <table
        class="bodyTable"
        role="presentation"
        width="100%"
        align="left"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="width: 100%; background-color: #fafafa; margin: 0"
        bgcolor="#FAFAFA"
      >
        <tr>
          <td
            class="body__content"
            align="left"
            width="100%"
            valign="top"
            style="
              color: #000000;
              font-size: 16px;
              line-height: 20px;
              font-family: Helvetica, Arial, sans-serif;
            "
          >
            <div
              class="header"
              style="
                background-color: #e0e0e0;
                height: 90px;
                width: 100%;
                color: #000000;
                font-family: Helvetica, Arial, sans-serif;
              "
            >
              <div
                class="container"
                style="margin: 0 auto; max-width: 600px; width: 100%"
              >
                <!--[if mso | IE]>
                <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                  <tr>
                    <td> <![endif]-->
                <table
                  class="container__table"
                  role="presentation"
                  border="0"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                >
                  <tr class="container__row">
                    <td
                      class="container__cell"
                      width="100%"
                      align="left"
                      valign="top"
                    >
                      <div class="row">
                        <table
                          class="row__table"
                          width="100%"
                          align="center"
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          style="table-layout: fixed"
                        >
                          <tr class="row__row">
                            <a large="12" href="#" class="a"
                              ><span class="a__text">
                                <img
                                  class="logo img__block"
                                  src="${baseUrl}/resources/logo.png"
                                  alt="
      SupaSteer
         Australia"
                                  border="0"
                                  style="
                                    display: block;
                                    max-width: 100%;
                                    white-space: pre;
                                    margin-top: 4px;
                                    margin-left: 10px;
                                    font-size: 20px;
                                  "
                                /> </span
                            ></a>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                </table>
                <!--[if mso | IE]> </td>
                  </tr>
                </table> <![endif]-->
              </div>
            </div>
            <div
              class="container"
              style="margin: 0 auto; max-width: 600px; width: 100%"
            >
              <!--[if mso | IE]>
              <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                <tr>
                  <td> <![endif]-->
              <table
                class="container__table"
                role="presentation"
                border="0"
                align="center"
                cellpadding="0"
                cellspacing="0"
                width="100%"
              >
                <tr class="container__row">
                  <td
                    class="container__cell"
                    width="100%"
                    align="left"
                    valign="top"
                  >
                    <div
                      class="content row"
                      style="
                        background-color: #ffffff;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        margin: 10px;
                        padding: 20px;
                      "
                    >
                      <table
                        class="row__table"
                        width="100%"
                        align="center"
                        role="presentation"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style="table-layout: fixed"
                      >
                        <tr class="row__row">
                          <td
                            class="column col-sm-12"
                            width="600"
                            style="width: 100%"
                            align="left"
                            valign="top"
                          >
                            <div class="row">
                              <table
                                class="row__table"
                                width="100%"
                                align="center"
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="table-layout: fixed"
                              >
                                <tr class="row__row">
                                  <td
                                    class="column col-sm-12"
                                    width="600"
                                    style="width: 100%"
                                    align="left"
                                    valign="top"
                                  >
                                    <h1
                                      class="title header h1"
                                      style="
                                        margin: 20px 0;
                                        line-height: 40px;
                                        width: 100%;
                                        color: #000000;
                                        font-family: Helvetica, Arial, sans-serif;
                                        padding-left: 10px;
                                        margin-bottom: 20px;
                                        margin-top: 0;
                                        height: min-content;
                                        background-color: #ffffff;
                                        font-weight: 500;
                                      "
                                    >
                                      Hi ${user.name},
                                    </h1>
                                    <p
                                      class="subtitle text p"
                                      style="
                                        display: block;
                                        color: #000000;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                        margin: 0;
                                        padding-left: 10px;
                                        font-size: 20px;
                                        margin-bottom: 10px;
                                      "
                                    >
                                      Unfortunately your order cannot be completed and has been cancelled.
                                    </p>
                                    <p
                                      class="subtitle text p"
                                      style="
                                        display: block;
                                        color: #000000;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                        margin: 0;
                                        padding-left: 10px;
                                        font-size: 20px;
                                        margin-bottom: 10px;
                                      "
                                    >
                                      Please call (03) 9722-0886 for more information.
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </div>
                            <div
                              class="section row"
                              style="
                                border-top: 1px solid #e0e0e0;
                                margin-top: 20px;
                                padding: 15px 15px 5px;
                              "
                            >
                              <table
                                class="row__table"
                                width="100%"
                                align="center"
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="table-layout: fixed"
                              >
                                <tr class="row__row">
                                  <td
                                    class="column col-sm-12"
                                    width="600"
                                    style="width: 100%"
                                    align="left"
                                    valign="top"
                                  >
                                    <p
                                      class="view-order-text text p"
                                      style="
                                        display: block;
                                        color: #000000;
                                        font-size: 16px;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                        max-width: 400px;
                                        margin: 10px auto 0;
                                        text-align: center;
                                      "
                                    >
                                      You can view the order details by clicking the button below,
                                      this order is also listed in your Profile at
                                      SupaSteer.com
                                    </p>
                                    <div
                                      class="secondary-button button"
                                      style="
                                        background-color: #48aa43;
                                        margin-top: 10px;
                                      "
                                    >
                                      <table
                                        role="presentation"
                                        width="100%"
                                        align="left"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                      >
                                        <tr>
                                          <td>
                                            <table
                                              role="presentation"
                                              width="auto"
                                              align="center"
                                              border="0"
                                              cellspacing="0"
                                              cellpadding="0"
                                              class="button__table"
                                              style="
                                                margin: 0 auto;
                                                margin-top: 10px;
                                              "
                                            >
                                              <tr>
                                                <td
                                                  align="center"
                                                  class="button__cell"
                                                  style="
                                                    border-radius: 3px;
                                                    padding: 6px 12px;
                                                    background-color: #48aa43;
                                                  "
                                                  bgcolor="#48AA43"
                                                >
                                                  <a
                                                    href="${baseUrl}/order/${
					order._id
				}"
                                                    class="button__link"
                                                    style="
                                                      color: #ffffff;
                                                      text-decoration: none;
                                                      background-color: #48aa43;
                                                      display: inline-block;
                                                    "
                                                    ><span
                                                      class="button__text"
                                                      style="
                                                        color: #ffffff;
                                                        text-decoration: none;
                                                      "
                                                      >View Your Order Online</span
                                                    ></a
                                                  >
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                            <div
                              class="section row"
                              style="
                                border-top: 1px solid #e0e0e0;
                                margin-top: 20px;
                                padding: 15px 15px 5px;
                              "
                            >
                              <table
                                class="row__table"
                                width="100%"
                                align="center"
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="table-layout: fixed"
                              >
                                <tr class="row__row">
                                  <td
                                    class="column col-sm-12"
                                    width="600"
                                    style="width: 100%"
                                    align="left"
                                    valign="top"
                                  >
                                    <h2
                                      class="header h2"
                                      style="
                                        line-height: 30px;
                                        width: 100%;
                                        color: #000000;
                                        font-family: Helvetica, Arial, sans-serif;
                                        height: min-content;
                                        background-color: #ffffff;
                                        font-weight: 500;
                                        margin: 0;
                                      "
                                    >
                                      Order Details:
                                    </h2>
                                  </td>
                                </tr>
                              </table>
                            </div>
                            ${order.orderItems.map(
															item =>
																` <div
                              class="order-item row"
                              style="
                                border-radius: 0;
                                border-top: 1px solid #616161;
                                margin: 10px 20px 0;
                                padding-left: 5px;
                                padding-top: 10px;
                              "
                            >
                              <table
                                class="row__table"
                                width="100%"
                                align="center"
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="table-layout: fixed"
                              >
                                <tr class="row__row">
                                  <td
                                    class="column col-sm-4"
                                    width="150"
                                    style="width: 25%"
                                    align="left"
                                    valign="top"
                                  >
                                    <img
                                      class="item-image img__block"
                                      src="${baseUrl}${item.image}"
                                      alt="Power Steering Rack"
                                      border="0"
                                      style="
                                        display: block;
                                        max-width: 100%;
                                        width: 100%;
                                      "
                                    />
                                  </td>
                                  <td
                                    class="item-info-column column col-sm-8"
                                    width="450"
                                    style="padding-left: 15px; width: 75%"
                                    align="left"
                                    valign="top"
                                  >
                                    <p
                                      class="item-info text p"
                                      style="
                                        display: block;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                        color: #424242;
                                        font-size: 13px;
                                        padding: 0;
                                        margin: 0;
                                      "
                                    >
                                      <a
                                        class="item-link a"
                                        href="${baseUrl}/product/${item.product}"
                                        style="
                                          font-weight: 500;
                                          font-size: 18px;
                                          color: #026a97;
                                          text-decoration: none;
                                        "
                                        ><span
                                          class="a__text"
                                          style="
                                            color: #026a97;
                                            text-decoration: none;
                                          "
                                          >${item.name}</span
                                        ></a
                                      >
                                    </p>
                                    <p
                                      class="item-info text p"
                                      style="
                                        display: block;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                        color: #424242;
                                        font-size: 13px;
                                        padding: 0;
                                        margin: 0;
                                      "
                                    >
                                      Price: $${item.price}
                                    </p>
                                    <p
                                      class="item-info text p"
                                      style="
                                        display: block;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                        color: #424242;
                                        font-size: 13px;
                                        padding: 0;
                                        margin: 0;
                                      "
                                    >
                                      Quantity: ${item.qty}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </div>`
														)}
                          
                            <div
                              class="order-item row"
                              style="
                                border-radius: 0;
                                border-top: 1px solid #616161;
                                margin: 10px 20px 0;
                                padding-left: 5px;
                                padding-top: 10px;
                              "
                            >
                              <table
                                class="row__table"
                                width="100%"
                                align="center"
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="table-layout: fixed"
                              >
                                <tr class="row__row">
                                  <td
                                    class="column col-sm-4"
                                    width="150"
                                    style="width: 25%"
                                    align="left"
                                    valign="top"
                                  >
                                    <p
                                      class="text p"
                                      style="
                                        display: block;
                                        margin: 14px 0;
                                        color: #000000;
                                        font-size: 16px;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                      "
                                    ></p>
                                  </td>
                                  <td
                                    class="column col-sm-8"
                                    width="450"
                                    style="width: 75%"
                                    align="left"
                                    valign="top"
                                  >
                                    <div
                                      class="table-footer row"
                                      style="
                                        padding-left: 20px;
                                        padding-right: 10px;
                                      "
                                    >
                                      <table
                                        class="row__table"
                                        width="100%"
                                        align="center"
                                        role="presentation"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="table-layout: fixed"
                                      >
                                        <tr class="row__row">
                                          <td
                                            class="total-column column col-sm-6"
                                            width="225"
                                            style="
                                              margin: 0;
                                              padding: 0;
                                              width: 50%;
                                            "
                                            align="left"
                                            valign="top"
                                          >
                                            <p
                                              class="total text p"
                                              style="
                                                font-size: 16px;
                                                line-height: 20px;
                                                font-family: Helvetica, Arial,
                                                  sans-serif;
                                                width: min-content;
                                                padding: 0;
                                                color: #424242;
                                                display: block;
                                                margin: 0;
                                              "
                                            >
                                              GST
                                            </p>
                                          </td>
                                          <td
                                            class="price-column column col-sm-6"
                                            width="225"
                                            style="
                                              margin: 0;
                                              padding: 0;
                                              width: 50%;
                                            "
                                            align="left"
                                            valign="top"
                                          >
                                            <p
                                              class="total-price text p"
                                              style="
                                                font-size: 16px;
                                                line-height: 20px;
                                                font-family: Helvetica, Arial,
                                                  sans-serif;
                                                width: min-content;
                                                padding: 0;
                                                color: #424242;
                                                display: block;
                                                margin: 0;
                                                margin-left: auto;
                                              "
                                            >
                                              +$${order.taxPrice}
                                            </p>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                    <div
                                      class="table-footer-total row"
                                      style="
                                        padding-left: 20px;
                                        padding-right: 10px;
                                        font-weight: 600;
                                        margin-top: 10px;
                                      "
                                    >
                                      <table
                                        class="row__table"
                                        width="100%"
                                        align="center"
                                        role="presentation"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="table-layout: fixed"
                                      >
                                        <tr class="row__row">
                                          <td
                                            class="total-column column col-sm-6"
                                            width="225"
                                            style="
                                              margin: 0;
                                              padding: 0;
                                              width: 50%;
                                            "
                                            align="left"
                                            valign="top"
                                          >
                                            <p
                                              class="total text p"
                                              style="
                                                font-size: 16px;
                                                line-height: 20px;
                                                font-family: Helvetica, Arial,
                                                  sans-serif;
                                                width: min-content;
                                                padding: 0;
                                                color: #424242;
                                                display: block;
                                                margin: 0;
                                              "
                                            >
                                              Total:
                                            </p>
                                          </td>
                                          <td
                                            class="price-column column col-sm-6"
                                            width="225"
                                            style="
                                              margin: 0;
                                              padding: 0;
                                              width: 50%;
                                            "
                                            align="left"
                                            valign="top"
                                          >
                                            <p
                                              class="total-price bold text p"
                                              style="
                                                font-size: 16px;
                                                line-height: 20px;
                                                font-family: Helvetica, Arial,
                                                  sans-serif;
                                                width: min-content;
                                                padding: 0;
                                                color: #424242;
                                                display: block;
                                                margin: 0;
                                                margin-left: auto;
                                              "
                                            >
                                              $${order.totalPrice}
                                            </p>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                            <div
                            class="section row"
                            style="
                              border-top: 1px solid #e0e0e0;
                              margin-top: 20px;
                              padding: 15px 15px 5px;
                            "
                          >
                            
          </div>
            <div
              class="footer"
              style="background-color: #e0e0e0; height: min-content; width: 100%"
            >
              <div
                class="container"
                style="margin: 0 auto; max-width: 600px; width: 100%"
              >
                <!--[if mso | IE]>
                <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                  <tr>
                    <td> <![endif]-->
                <table
                  class="container__table"
                  role="presentation"
                  border="0"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                >
                  <tr class="container__row">
                    <td
                      class="container__cell"
                      width="100%"
                      align="left"
                      valign="top"
                    >
                      <div class="footer-row row" style="padding: 10px 25px">
                        <table
                          class="row__table"
                          width="100%"
                          align="center"
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          style="table-layout: fixed"
                        >
                          <tr class="row__row">
                            <p
                              class="footer-text text p"
                              large="1"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                              "
                            >
                              This email was sent by SupaSteer Australia, 11
                              Valley road, Wonga Park VIC 3115.
                            </p>
                            <p
                              class="footer-text text p"
                              large="1"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                              "
                            >
                              Make sure you add noreply@supasteer.com to your
                              address book and safe list.
                            </p>
                            <p
                              class="footer-text text p"
                              large="1"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                              "
                            >
                              You have received this email as this is a service
                              announcement and not a promotional email.
                            </p>
                            <p
                              class="footer-text text p"
                              large="1"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                              "
                            >
                              Emails to this address will not be responded to. If
                              you need any further information feel free to call
                              on (03) 9722-0886
                            </p>
                            <p
                              class="footer-center text p"
                              large="1"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                                text-align: center;
                              "
                            >
                              &copy; Copyright 2020, SupaSteer Australia
                            </p>
                            <p
                              class="footer-center text p"
                              large="1"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                                text-align: center;
                              "
                            >
                              Designed and developed by
                              <a
                                class="link a"
                                href="#"
                                style="color: #026a97; text-decoration: none"
                                ><span
                                  class="a__text"
                                  style="color: #026a97; text-decoration: none"
                                  >Apex Apps</span
                                ></a
                              >
                            </p>
                            <p
                              class="footer-center text p"
                              large="6"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                                text-align: center;
                              "
                            >
                              <a
                                class="link a"
                                href="${baseUrl}/terms"
                                style="color: #026a97; text-decoration: none"
                                ><span
                                  class="a__text"
                                  style="color: #026a97; text-decoration: none"
                                  >Terms and Conditions</span
                                ></a
                              >
                            </p>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                </table>
                <!--[if mso | IE]> </td>
                  </tr>
                </table> <![endif]-->
              </div>
            </div>
          </td>
        </tr>
      </table>
      <div
        style="
          display: none;
          white-space: nowrap;
          font-size: 15px;
          line-height: 0;
        "
      >
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </div>
    </body>
  </html>
  
      `
			];
		case 'CHANGE_EMAIL':
			return [
				user.newEmail,
				`Confirm Email Address Change for SupaSteer Account`,
				`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
          <head> </head>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="x-apple-disable-message-reformatting" />
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <!--<![endif]-->
            <style type="text/css">
              * {
                text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
              }
        
              html {
                height: 100%;
                width: 100%;
              }
        
              body {
                height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                mso-line-height-rule: exactly;
              }
        
              div[style*="margin: 16px 0"] {
                margin: 0 !important;
              }
        
              table,
              td {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              }
        
              img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
                -ms-interpolation-mode: bicubic;
              }
        
              .ReadMsgBody,
              .ExternalClass {
                width: 100%;
              }
        
              .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass td,
              .ExternalClass div {
                line-height: 100%;
              }
            </style>
            <!--[if gte mso 9]>
              <style type="text/css">
              li { text-indent: -1em; }
              table td { border-collapse: collapse; }
              </style>
              <![endif]-->
            <title> </title>
            <!-- content -->
            <!--[if gte mso 9]><xml>
               <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
               </o:OfficeDocumentSettings>
              </xml><![endif]-->
          </head>
          <body class="body" style="background-color: #FAFAFA; margin: 0; width: 100%;">
            <table class="bodyTable" role="presentation" width="100%" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #FAFAFA; margin: 0;" bgcolor="#FAFAFA">
              <tr>
                <td class="body__content" align="left" width="100%" valign="top" style="color: #000000; font-size: 16px; line-height: 20px; font-family: Helvetica,Arial,sans-serif;">
                  <div class="header" style="background-color: #E0E0E0; height: 90px; width: 100%; color: #000000; font-family: Helvetica,Arial,sans-serif;">
                    <div class="container" style="margin: 0 auto; max-width: 600px; width: 100%;"> <!--[if mso | IE]>
                      <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                        <tr>
                          <td> <![endif]-->
                            <table class="container__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                              <tr class="container__row">
                                <td class="container__cell" width="100%" align="left" valign="top">
                                  <div class="row">
                                    <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                      <tr class="row__row"> <a class="logo-link a" large="12" href="${baseUrl}" style="text-decoration: none; color: #000000;"><span class="a__text" style="text-decoration: none; color: #000000;">
                  <img class="logo img__block" src="${baseUrl}/resources/logo.png" alt="
            SupaSteer
               Australia" border="0" style="display: block; max-width: 100%; white-space: pre; margin-top: 4px; margin-left: 10px; font-size: 20px;"/>
                  </span></a> </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table> <!--[if mso | IE]> </td>
                        </tr>
                      </table> <![endif]--> </div>
                  </div>
                  <div class="container" style="margin: 0 auto; max-width: 600px; width: 100%;"> <!--[if mso | IE]>
                    <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                      <tr>
                        <td> <![endif]-->
                          <table class="container__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                            <tr class="container__row">
                              <td class="container__cell" width="100%" align="left" valign="top">
                                <div class="content row" style="background-color: #FFFFFF; border: 1px solid #E0E0E0; border-radius: 8px; margin: 10px; padding: 20px;">
                                  <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                    <tr class="row__row">
                                      <td class="column col-sm-12" width="600" style="width: 100%" align="left" valign="top">
                                        <h1 class="title header h1" style="margin: 20px 0; line-height: 40px; width: 100%; color: #000000; font-family: Helvetica,Arial,sans-serif; padding-left: 10px; margin-bottom: 20px; margin-top: 0; height: min-content; background-color: #FFFFFF; font-weight: 500;">Hi ${user.name},</h1>
                                        <p class="content-text text p" style="display: block; color: #000000; font-size: 16px; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0 15px; margin: 0 0 5px;"> A request was made to change your SupaSteer account email from ${user.email} to ${user.newEmail}</p>
                                        <p class="content-text text p" style="display: block; color: #000000; font-size: 16px; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0 15px; margin: 0 0 5px;">
                                        Please click below to confirm this change: </p>
                                        <div class="secondary-button button" style="background-color: #48AA43; margin: 15px auto;">
                                          <table role="presentation" width="100%" align="left" border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                              <td>
                                                <table role="presentation" width="auto" align="center" border="0" cellspacing="0" cellpadding="0" class="button__table" style="margin: 15px auto;">
                                                  <tr>
                                                    <td align="center" class="button__cell" style="border-radius: 3px; padding: 6px 12px; background-color: #48AA43;" bgcolor="#48AA43"><a href="${baseUrl}/changeemail/${token}" class="button__link" style="color: #FFFFFF; text-decoration: none; background-color: #48AA43; display: inline-block;"><span class="button__text" style="color: #FFFFFF; text-decoration: none;">
                    Verify Email
                  </span></a></td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </table> <!--[if mso | IE]> </td>
                      </tr>
                    </table> <![endif]--> </div>
                  <div class="footer" style="background-color: #E0E0E0; height: min-content; width: 100%;">
                    <div class="container" style="margin: 0 auto; max-width: 600px; width: 100%;"> <!--[if mso | IE]>
                      <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                        <tr>
                          <td> <![endif]-->
                            <table class="container__table" role="presentation" border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                              <tr class="container__row">
                                <td class="container__cell" width="100%" align="left" valign="top">
                                  <div class="footer-row row" style="padding: 10px 25px;">
                                    <table class="row__table" width="100%" align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                                      <tr class="row__row">
                                        <p class="footer-text text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0;">This email was sent by SupaSteer Australia, 11 Valley road, Wonga Park VIC 3115.</p>
                                        <p class="footer-text text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0;">Make sure you add noreply@supasteer.com to your address book and safe list.</p>
                                        <p class="footer-text text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0;">You have received this email as your email address was used to register an account at SupaSteer.com, this not a promotional email.</p>
                                        <p class="footer-text text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0;">Emails to this address will not be responded to. If you need any further information feel free to call on (03) 9722-0886</p>
                                        <p class="footer-center text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0; text-align: center;">&copy; Copyright 2020, SupaSteer Australia</p>
                                        <p class="footer-center text p" large="1" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0; text-align: center;">Designed and developed by <a class="link a" href="#" style="color: #026A97; text-decoration: none;"><span class="a__text" style="color: #026A97; text-decoration: none;">Apex Apps</span></a></p>
                                        <p class="footer-center text p"
                                          large="6" style="display: block; line-height: 20px; font-family: Helvetica,Arial,sans-serif; padding: 0; color: #424242; font-size: 11px; margin: 0; text-align: center;"><a class="link a" href="${baseUrl}/terms" style="color: #026A97; text-decoration: none;"><span class="a__text" style="color: #026A97; text-decoration: none;">Terms and Conditions</span></a></p>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table> <!--[if mso | IE]> </td>
                        </tr>
                      </table> <![endif]--> </div>
                  </div>
                </td>
              </tr>
            </table>
            <div style="display:none; white-space:nowrap; font-size:15px; line-height:0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
          </body>
        </html>`
			];
		case 'ADMIN_NEW_ORDER':
			return [
				mailList,
				`New ${
					order.delivery === 'delivery' ? 'Delivery' : 'Pick-Up'
				} Order Received #${order._id}`,
				`
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
  <html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head> </head>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!--<![endif]-->
      <style type="text/css">
        * {
          text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
  
        html {
          height: 100%;
          width: 100%;
        }
  
        body {
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          mso-line-height-rule: exactly;
        }
  
        div[style*='margin: 16px 0'] {
          margin: 0 !important;
        }
  
        table,
        td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
  
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
  
        .ReadMsgBody,
        .ExternalClass {
          width: 100%;
        }
  
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
      </style>
      <!--[if gte mso 9]>
        <style type="text/css">
          li {
            text-indent: -1em;
          }
          table td {
            border-collapse: collapse;
          }
        </style>
      <![endif]-->
      <title> </title>
      <style>
        @media only screen and (max-width: 600px) {
          .col-sm-4 {
            display: block;
            width: 33% !important;
          }
          .column,
          .column-filler {
            box-sizing: border-box;
            float: left;
          }
          .col-sm-8 {
            display: block;
            width: 67% !important;
          }
        }
      </style>
      <!-- content -->
      <!--[if gte mso 9
        ]><xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml><!
      [endif]-->
    </head>
    <body class="body" style="background-color: #fafafa; margin: 0; width: 100%">
      <table
        class="bodyTable"
        role="presentation"
        width="100%"
        align="left"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="width: 100%; background-color: #fafafa; margin: 0"
        bgcolor="#FAFAFA"
      >
        <tr>
          <td
            class="body__content"
            align="left"
            width="100%"
            valign="top"
            style="
              color: #000000;
              font-size: 16px;
              line-height: 20px;
              font-family: Helvetica, Arial, sans-serif;
            "
          >
            <div
              class="header"
              style="
                background-color: #e0e0e0;
                height: 90px;
                width: 100%;
                color: #000000;
                font-family: Helvetica, Arial, sans-serif;
              "
            >
              <div
                class="container"
                style="margin: 0 auto; max-width: 600px; width: 100%"
              >
                <!--[if mso | IE]>
                <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                  <tr>
                    <td> <![endif]-->
                <table
                  class="container__table"
                  role="presentation"
                  border="0"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                >
                  <tr class="container__row">
                    <td
                      class="container__cell"
                      width="100%"
                      align="left"
                      valign="top"
                    >
                      <div class="row">
                        <table
                          class="row__table"
                          width="100%"
                          align="center"
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          style="table-layout: fixed"
                        >
                          <tr class="row__row">
                            <a large="12" href="#" class="a"
                              ><span class="a__text">
                                <img
                                  class="logo img__block"
                                  src="${baseUrl}/resources/logo.png"
                                  alt="
      SupaSteer
         Australia"
                                  border="0"
                                  style="
                                    display: block;
                                    max-width: 100%;
                                    white-space: pre;
                                    margin-top: 4px;
                                    margin-left: 10px;
                                    font-size: 20px;
                                  "
                                /> </span
                            ></a>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                </table>
                <!--[if mso | IE]> </td>
                  </tr>
                </table> <![endif]-->
              </div>
            </div>
            <div
              class="container"
              style="margin: 0 auto; max-width: 600px; width: 100%"
            >
              <!--[if mso | IE]>
              <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                <tr>
                  <td> <![endif]-->
              <table
                class="container__table"
                role="presentation"
                border="0"
                align="center"
                cellpadding="0"
                cellspacing="0"
                width="100%"
              >
                <tr class="container__row">
                  <td
                    class="container__cell"
                    width="100%"
                    align="left"
                    valign="top"
                  >
                    <div
                      class="content row"
                      style="
                        background-color: #ffffff;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        margin: 10px;
                        padding: 20px;
                      "
                    >
                      <table
                        class="row__table"
                        width="100%"
                        align="center"
                        role="presentation"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style="table-layout: fixed"
                      >
                        <tr class="row__row">
                          <td
                            class="column col-sm-12"
                            width="600"
                            style="width: 100%"
                            align="left"
                            valign="top"
                          >
                            <div class="row">
                              <table
                                class="row__table"
                                width="100%"
                                align="center"
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="table-layout: fixed"
                              >
                                <tr class="row__row">
                                  <td
                                    class="column col-sm-12"
                                    width="600"
                                    style="width: 100%"
                                    align="left"
                                    valign="top"
                                  >
                                    <h1
                                      class="title header h1"
                                      style="
                                        margin: 20px 0;
                                        line-height: 40px;
                                        width: 100%;
                                        color: #000000;
                                        font-family: Helvetica, Arial, sans-serif;
                                        padding-left: 10px;
                                        margin-bottom: 20px;
                                        margin-top: 0;
                                        height: min-content;
                                        background-color: #ffffff;
                                        font-weight: 500;
                                      "
                                    >
                                      New Order Created!
                                    </h1>
                                    <p
                                      class="subtitle text p"
                                      style="
                                        display: block;
                                        color: #000000;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                        margin: 0;
                                        padding-left: 10px;
                                        font-size: 20px;
                                        margin-bottom: 10px;
                                      "
                                    >
                                      A new order has been created by ${
																				user.name
																			}.
                                    </p>
                                   ${
																			order.isPaid
																				? `<p
                                   class="subtitle text p"
                                   style="
                                     display: block;
                                     color: #000000;
                                     line-height: 20px;
                                     font-family: Helvetica, Arial, sans-serif;
                                     margin: 0;
                                     padding-left: 10px;
                                     font-size: 20px;
                                     margin-bottom: 10px;
                                   "
                                 >
                                   Payment has been recieved.
                                 </p>`
																				: `
                                 <p
                                 class="subtitle text p"
                                 style="
                                   display: block;
                                   color: #000000;
                                   line-height: 20px;
                                   font-family: Helvetica, Arial, sans-serif;
                                   margin: 0;
                                   padding-left: 10px;
                                   font-size: 20px;
                                   margin-bottom: 10px;
                                 "
                               >
                                 Payment has not yet been recieved
                               </p>`
																		}
                                  </td>
                                </tr>
                              </table>
                            </div>
                            <div
                              class="section row"
                              style="
                                border-top: 1px solid #e0e0e0;
                                margin-top: 20px;
                                padding: 15px 15px 5px;
                              "
                            >
                              <table
                                class="row__table"
                                width="100%"
                                align="center"
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="table-layout: fixed"
                              >
                                <tr class="row__row">
                                  <td
                                    class="column col-sm-12"
                                    width="600"
                                    style="width: 100%"
                                    align="left"
                                    valign="top"
                                  >
                                    <p
                                      class="view-order-text text p"
                                      style="
                                        display: block;
                                        color: #000000;
                                        font-size: 16px;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                        max-width: 400px;
                                        margin: 10px auto 0;
                                        text-align: center;
                                      "
                                    >
                                      You can find the details of the order by clicking button below. You can also access a list of all orders via the admin menu in your profile at SupaSteer.com
                                    </p>
                                    <div
                                      class="secondary-button button"
                                      style="
                                        background-color: #48aa43;
                                        margin-top: 10px;
                                      "
                                    >
                                      <table
                                        role="presentation"
                                        width="100%"
                                        align="left"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                      >
                                        <tr>
                                          <td>
                                            <table
                                              role="presentation"
                                              width="auto"
                                              align="center"
                                              border="0"
                                              cellspacing="0"
                                              cellpadding="0"
                                              class="button__table"
                                              style="
                                                margin: 0 auto;
                                                margin-top: 10px;
                                              "
                                            >
                                              <tr>
                                                <td
                                                  align="center"
                                                  class="button__cell"
                                                  style="
                                                    border-radius: 3px;
                                                    padding: 6px 12px;
                                                    background-color: #48aa43;
                                                  "
                                                  bgcolor="#48AA43"
                                                >
                                                  <a
                                                    href="${baseUrl}/order/${
					order._id
				}"
                                                    class="button__link"
                                                    style="
                                                      color: #ffffff;
                                                      text-decoration: none;
                                                      background-color: #48aa43;
                                                      display: inline-block;
                                                    "
                                                    ><span
                                                      class="button__text"
                                                      style="
                                                        color: #ffffff;
                                                        text-decoration: none;
                                                      "
                                                      >View The Order Online</span
                                                    ></a
                                                  >
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                            <div
                              class="section row"
                              style="
                                border-top: 1px solid #e0e0e0;
                                margin-top: 20px;
                                padding: 15px 15px 5px;
                              "
                            >
                              <table
                                class="row__table"
                                width="100%"
                                align="center"
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="table-layout: fixed"
                              >
                                <tr class="row__row">
                                  <td
                                    class="column col-sm-12"
                                    width="600"
                                    style="width: 100%"
                                    align="left"
                                    valign="top"
                                  >
                                    <h2
                                      class="header h2"
                                      style="
                                        line-height: 30px;
                                        width: 100%;
                                        color: #000000;
                                        font-family: Helvetica, Arial, sans-serif;
                                        height: min-content;
                                        background-color: #ffffff;
                                        font-weight: 500;
                                        margin: 0;
                                      "
                                    >
                                      Order Details:
                                    </h2>
                                  </td>
                                </tr>
                              </table>
                            </div>
                            ${order.orderItems.map(
															item =>
																` <div
                              class="order-item row"
                              style="
                                border-radius: 0;
                                border-top: 1px solid #616161;
                                margin: 10px 20px 0;
                                padding-left: 5px;
                                padding-top: 10px;
                              "
                            >
                              <table
                                class="row__table"
                                width="100%"
                                align="center"
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="table-layout: fixed"
                              >
                                <tr class="row__row">
                                  <td
                                    class="column col-sm-4"
                                    width="150"
                                    style="width: 25%"
                                    align="left"
                                    valign="top"
                                  >
                                    <img
                                      class="item-image img__block"
                                      src="${baseUrl}${item.image}"
                                      alt="Power Steering Rack"
                                      border="0"
                                      style="
                                        display: block;
                                        max-width: 100%;
                                        width: 100%;
                                      "
                                    />
                                  </td>
                                  <td
                                    class="item-info-column column col-sm-8"
                                    width="450"
                                    style="padding-left: 15px; width: 75%"
                                    align="left"
                                    valign="top"
                                  >
                                    <p
                                      class="item-info text p"
                                      style="
                                        display: block;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                        color: #424242;
                                        font-size: 13px;
                                        padding: 0;
                                        margin: 0;
                                      "
                                    >
                                      <a
                                        class="item-link a"
                                        href="${baseUrl}/product/${item.product}"
                                        style="
                                          font-weight: 500;
                                          font-size: 18px;
                                          color: #026a97;
                                          text-decoration: none;
                                        "
                                        ><span
                                          class="a__text"
                                          style="
                                            color: #026a97;
                                            text-decoration: none;
                                          "
                                          >${item.name}</span
                                        ></a
                                      >
                                    </p>
                                    <p
                                      class="item-info text p"
                                      style="
                                        display: block;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                        color: #424242;
                                        font-size: 13px;
                                        padding: 0;
                                        margin: 0;
                                      "
                                    >
                                      Price: $${item.price}
                                    </p>
                                    <p
                                      class="item-info text p"
                                      style="
                                        display: block;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                        color: #424242;
                                        font-size: 13px;
                                        padding: 0;
                                        margin: 0;
                                      "
                                    >
                                      Quantity: ${item.qty}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </div>`
														)}
                          
                            <div
                              class="order-item row"
                              style="
                                border-radius: 0;
                                border-top: 1px solid #616161;
                                margin: 10px 20px 0;
                                padding-left: 5px;
                                padding-top: 10px;
                              "
                            >
                              <table
                                class="row__table"
                                width="100%"
                                align="center"
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="table-layout: fixed"
                              >
                                <tr class="row__row">
                                  <td
                                    class="column col-sm-4"
                                    width="150"
                                    style="width: 25%"
                                    align="left"
                                    valign="top"
                                  >
                                    <p
                                      class="text p"
                                      style="
                                        display: block;
                                        margin: 14px 0;
                                        color: #000000;
                                        font-size: 16px;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                      "
                                    ></p>
                                  </td>
                                  <td
                                    class="column col-sm-8"
                                    width="450"
                                    style="width: 75%"
                                    align="left"
                                    valign="top"
                                  >
                                    <div
                                      class="table-footer row"
                                      style="
                                        padding-left: 20px;
                                        padding-right: 10px;
                                      "
                                    >
                                      <table
                                        class="row__table"
                                        width="100%"
                                        align="center"
                                        role="presentation"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="table-layout: fixed"
                                      >
                                        <tr class="row__row">
                                          <td
                                            class="total-column column col-sm-6"
                                            width="225"
                                            style="
                                              margin: 0;
                                              padding: 0;
                                              width: 50%;
                                            "
                                            align="left"
                                            valign="top"
                                          >
                                            <p
                                              class="total text p"
                                              style="
                                                font-size: 16px;
                                                line-height: 20px;
                                                font-family: Helvetica, Arial,
                                                  sans-serif;
                                                width: min-content;
                                                padding: 0;
                                                color: #424242;
                                                display: block;
                                                margin: 0;
                                              "
                                            >
                                              GST
                                            </p>
                                          </td>
                                          <td
                                            class="price-column column col-sm-6"
                                            width="225"
                                            style="
                                              margin: 0;
                                              padding: 0;
                                              width: 50%;
                                            "
                                            align="left"
                                            valign="top"
                                          >
                                            <p
                                              class="total-price text p"
                                              style="
                                                font-size: 16px;
                                                line-height: 20px;
                                                font-family: Helvetica, Arial,
                                                  sans-serif;
                                                width: min-content;
                                                padding: 0;
                                                color: #424242;
                                                display: block;
                                                margin: 0;
                                                margin-left: auto;
                                              "
                                            >
                                              +$${order.taxPrice}
                                            </p>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                    <div
                                      class="table-footer-total row"
                                      style="
                                        padding-left: 20px;
                                        padding-right: 10px;
                                        font-weight: 600;
                                        margin-top: 10px;
                                      "
                                    >
                                      <table
                                        class="row__table"
                                        width="100%"
                                        align="center"
                                        role="presentation"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="table-layout: fixed"
                                      >
                                        <tr class="row__row">
                                          <td
                                            class="total-column column col-sm-6"
                                            width="225"
                                            style="
                                              margin: 0;
                                              padding: 0;
                                              width: 50%;
                                            "
                                            align="left"
                                            valign="top"
                                          >
                                            <p
                                              class="total text p"
                                              style="
                                                font-size: 16px;
                                                line-height: 20px;
                                                font-family: Helvetica, Arial,
                                                  sans-serif;
                                                width: min-content;
                                                padding: 0;
                                                color: #424242;
                                                display: block;
                                                margin: 0;
                                              "
                                            >
                                              Total:
                                            </p>
                                          </td>
                                          <td
                                            class="price-column column col-sm-6"
                                            width="225"
                                            style="
                                              margin: 0;
                                              padding: 0;
                                              width: 50%;
                                            "
                                            align="left"
                                            valign="top"
                                          >
                                            <p
                                              class="total-price bold text p"
                                              style="
                                                font-size: 16px;
                                                line-height: 20px;
                                                font-family: Helvetica, Arial,
                                                  sans-serif;
                                                width: min-content;
                                                padding: 0;
                                                color: #424242;
                                                display: block;
                                                margin: 0;
                                                margin-left: auto;
                                              "
                                            >
                                              $${order.totalPrice}
                                            </p>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                            <div
                              class="section row"
                              style="
                                border-top: 1px solid #e0e0e0;
                                margin-top: 20px;
                                padding: 15px 15px 5px;
                              "
                            >
                              <table
                                class="row__table"
                                width="100%"
                                align="center"
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="table-layout: fixed"
                              >
                                <tr class="row__row">
                                  <td
                                    class="column col-sm-12"
                                    width="600"
                                    style="width: 100%"
                                    align="left"
                                    valign="top"
                                  >
                                    <h2
                                      class="header h2"
                                      style="
                                        line-height: 30px;
                                        width: 100%;
                                        color: #000000;
                                        font-family: Helvetica, Arial, sans-serif;
                                        height: min-content;
                                        background-color: #ffffff;
                                        font-weight: 500;
                                        margin: 0;
                                      "
                                    >
                                      ${
																				order.delivery === 'delivery'
																					? 'Delivery Information'
																					: 'Pick-Up Information'
																			}
                                    </h2>
                                    <p
                                      class="delivery-text text p"
                                      style="
                                        display: block;
                                        color: #000000;
                                        font-size: 16px;
                                        line-height: 20px;
                                        font-family: Helvetica, Arial, sans-serif;
                                        margin: 15px;
                                      "
                                    >
                                    ${
																			order.delivery === 'delivery'
																				? 'Delivery has been requested to the following Address:'
																				: 'The customer has requested to collect the order from the SupaSteer factory'
																		}
                                    </p>
                                    <div
                                      class="address-container"
                                      style="
                                        border: 1px solid #e0e0e0;
                                        border-radius: 8px;
                                        display: block;
                                        margin: 0 auto;
                                        padding: 15px 25px;
                                        width: min-content;
                                      "
                                    >
                                    ${
																			order.delivery === 'delivery'
																				? `<p
                                        class="delivery-address text p"
                                        style="
                                          display: block;
                                          color: #000000;
                                          font-size: 16px;
                                          line-height: 20px;
                                          font-family: Helvetica, Arial,
                                            sans-serif;
                                          padding: 0;
                                          margin: 0 0 2px;
                                          white-space: nowrap;
                                        "
                                      >
                                      ${user.name}
                                      </p>`
																				: ``
																		}
                                      ${
																				order.delivery === 'delivery'
																					? user.formattedAddress
																							.split(',')
																							.map(
																								x =>
																									`	<p
                                        class="delivery-address text p"
                                        style="
                                          display: block;
                                          color: #000000;
                                          font-size: 16px;
                                          line-height: 20px;
                                          font-family: Helvetica ;
                                          padding: 0;
                                          margin: 0 0 2px;
                                          white-space: nowrap;
                                        "
                                      >
                                        ${x}
                                      </p>`
																							)
																							.join()
																							.replace(/,/g, '')
																					: `
                                      `
																			}
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>
              <!--[if mso | IE]> </td>
                </tr>
              </table> <![endif]-->
            </div>
            <div
              class="footer"
              style="background-color: #e0e0e0; height: min-content; width: 100%"
            >
              <div
                class="container"
                style="margin: 0 auto; max-width: 600px; width: 100%"
              >
                <!--[if mso | IE]>
                <table class="container__table__ie" role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-right: auto; margin-left: auto;width: 600px" width="600" align="center">
                  <tr>
                    <td> <![endif]-->
                <table
                  class="container__table"
                  role="presentation"
                  border="0"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                >
                  <tr class="container__row">
                    <td
                      class="container__cell"
                      width="100%"
                      align="left"
                      valign="top"
                    >
                      <div class="footer-row row" style="padding: 10px 25px">
                        <table
                          class="row__table"
                          width="100%"
                          align="center"
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          style="table-layout: fixed"
                        >
                          <tr class="row__row">
                            <p
                              class="footer-text text p"
                              large="1"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                              "
                            >
                              This email was sent by SupaSteer Australia, 11
                              Valley road, Wonga Park VIC 3115.
                            </p>
                            <p
                              class="footer-text text p"
                              large="1"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                              "
                            >
                              Make sure you add noreply@supasteer.com to your
                              address book and safe list.
                            </p>
                            <p
                              class="footer-text text p"
                              large="1"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                              "
                            >
                              You have received this email as this is a service
                              announcement and not a promotional email.
                            </p>
                            <p
                              class="footer-text text p"
                              large="1"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                              "
                            >
                              Emails to this address will not be responded to. If
                              you need any further information feel free to call
                              on (03) 9722-0886
                            </p>
                            <p
                              class="footer-center text p"
                              large="1"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                                text-align: center;
                              "
                            >
                              &copy; Copyright 2020, SupaSteer Australia
                            </p>
                            <p
                              class="footer-center text p"
                              large="1"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                                text-align: center;
                              "
                            >
                              Designed and developed by
                              <a
                                class="link a"
                                href="#"
                                style="color: #026a97; text-decoration: none"
                                ><span
                                  class="a__text"
                                  style="color: #026a97; text-decoration: none"
                                  >Apex Apps</span
                                ></a
                              >
                            </p>
                            <p
                              class="footer-center text p"
                              large="6"
                              style="
                                display: block;
                                line-height: 20px;
                                font-family: Helvetica, Arial, sans-serif;
                                padding: 0;
                                color: #424242;
                                font-size: 11px;
                                margin: 0;
                                text-align: center;
                              "
                            >
                              <a
                                class="link a"
                                href="${baseUrl}/terms"
                                style="color: #026a97; text-decoration: none"
                                ><span
                                  class="a__text"
                                  style="color: #026a97; text-decoration: none"
                                  >Terms and Conditions</span
                                ></a
                              >
                            </p>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                </table>
                <!--[if mso | IE]> </td>
                  </tr>
                </table> <![endif]-->
              </div>
            </div>
          </td>
        </tr>
      </table>
      <div
        style="
          display: none;
          white-space: nowrap;
          font-size: 15px;
          line-height: 0;
        "
      >
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </div>
    </body>
  </html>
  
      `
			];
		default:
			break;
	}
};

export default useHtmlTemplate;
