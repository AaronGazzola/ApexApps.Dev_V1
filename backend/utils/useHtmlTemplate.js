import moment from 'moment';

const useHtmlTemplate = ({
	type,
	baseUrl,
	client,
	reason = '',
	actionLink,
	buttonText,
	booking,
	mailList
}) => {
	const header = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
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
    <body class="body" style="background-color: #000000; margin: 0; width: 100%">
      <table
        class="bodyTable"
        role="presentation"
        width="100%"
        align="left"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="width: 100%; background-color: #000000; margin: 0"
        bgcolor="#000000"
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
                background-color: #000000;
                height: 100px;
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
                            <a
                              class="logo-link a"
                              large="12"
                              href="${baseUrl}"
                              style="
                                width: min-content;
                                color: #000000;
                                text-decoration: none;
                              "
                              ><span
                                class="a__text"
                                style="color: #000000; text-decoration: none"
                              >
                                <img
                                  class="logo img__block"
                                  src="${baseUrl}/images/apex-apps-logo.png"
                                  alt="
  Apex Apps"
                                  border="0"
                                  style="
                                    display: block;
                                    max-width: 100%;
                                    white-space: pre;
                                    text-align: center;
                                    margin: 0 auto;
                                    font-size: 30px;
                                    color: #52ffbf;
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
                        border-left: 1px solid #cf3a19;
                        margin: 10px 10px 30px;
                        padding: 20px;
                        background-color: #090909;
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
  `;
	const footer = `													<p
  class="content-text signature1 text p"
  style="
    display: block;
    line-height: 20px;
    font-family: Helvetica, Arial, sans-serif;
    padding: 0 15px;
    color: #ffffff;
    font-size: 18px;
    margin: 0 0 5px;
    margin-left: 20px;
  "
>
  <br />
  Kind Regards,
</p>
<p
  class="content-text signature2 text p"
  style="
    display: block;
    line-height: 20px;
    font-family: Helvetica, Arial, sans-serif;
    padding: 0 15px;
    color: #ffffff;
    font-size: 18px;
    margin: 0 0 5px;
    font-style: italic;
    margin-left: 40px;
  "
>
  Aaron Gazzola
</p>
</td>
</tr></table>
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
style="background-color: #090909; height: min-content; width: 100%"
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
            large="2"
            style="
              display: block;
              line-height: 20px;
              font-family: Helvetica, Arial, sans-serif;
              padding: 0;
              color: #b0b0b0;
              font-size: 14px;
              margin: 0;
            "
          >
            This email was sent by Apex Apps, ABN: 81700757157.
          </p>
          <p
            class="footer-text text p"
            large="2"
            style="
              display: block;
              line-height: 20px;
              font-family: Helvetica, Arial, sans-serif;
              padding: 0;
              color: #b0b0b0;
              font-size: 14px;
              margin: 0;
            "
          >
            Make sure you add
            <span
              class="clear-footer-link"
              style="color: #b0b0b0; text-decoration: none"
              >aaron@apexapps.dev</span
            >
            to your address book and safe list.
          </p>
          <p
            class="footer-text text p"
            large="2"
            style="
              display: block;
              line-height: 20px;
              font-family: Helvetica, Arial, sans-serif;
              padding: 0;
              color: #b0b0b0;
              font-size: 14px;
              margin: 0;
            "
          >
            ${reason}
          </p>
          <p
            class="footer-text footer-center text p"
            large="2"
            style="
              display: block;
              line-height: 20px;
              font-family: Helvetica, Arial, sans-serif;
              color: #b0b0b0;
              font-size: 14px;
              padding: 0;
              margin: 0;
              text-align: center;
            "
          >
            <br />
            &copy; Copyright ${moment().year()}, Apex Apps
          </p>
          <p
            class="footer-text footer-center text p"
            large="4"
            style="
              display: block;
              line-height: 20px;
              font-family: Helvetica, Arial, sans-serif;
              color: #b0b0b0;
              font-size: 14px;
              padding: 0;
              margin: 0;
              text-align: center;
            "
          >
            Designed and developed by
            <a
              class="link a"
              href="${baseUrl}"
              style="color: #52ffbf; text-decoration: none"
              ><span
                class="a__text"
                style="color: #52ffbf; text-decoration: none"
                >Apex Apps</span
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
</html>`;

	const heading = text =>
		`<h1
  class="title header h1"
  style="
    margin: 20px 0;
    line-height: 40px;
    width: 100%;
    font-family: Helvetica, Arial, sans-serif;
    padding-left: 10px;
    background-color: transparent;
    margin-bottom: 20px;
    margin-top: 0;
    height: min-content;
    color: #ffffff;
    font-weight: 500;
  "
>
  ${text}
</h1>`;

	const paragraph = (text, br = 'no br') =>
		`	<p
class="content-text text p"
style="
  display: block;
  line-height: 20px;
  font-family: Helvetica, Arial, sans-serif;
  padding: 0 15px;
  color: #ffffff;
  font-size: 18px;
  margin: 0 0 5px;
"
>
${br === 'br' ? '<br />' : ''}
${text}
</p>`;

	const button = `
<div class="button button">
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
        style="margin: 20px auto"
      >
        <tr>
          <td
            align="center"
            class="button__cell"
            style="
              border-radius: 3px;
              padding: 6px 12px;
              background-color: #52ffbf;
            "
            bgcolor="#52FFBF"
          >
            <a
              href="${actionLink}"
              class="button__link"
              style="
                text-decoration: none;
                background-color: #52ffbf;
                color: #000000;
                font-weight: 700;
                display: inline-block;
              "
              ><span
                class="button__text"
                style="
                  text-decoration: none;
                  color: #000000;
                "
              >
                ${buttonText}
              </span></a
            >
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</div>`;

	switch (type) {
		case 'VERIFY':
			return [
				client.email,
				`Please verify your email address`,
				`${header}
        ${heading(`Hi ${client.name}`)}
        ${paragraph(
					`Click the button below to verify your email address and confirm your booking`
				)}
        ${button}
        ${paragraph(
					`Feel free to reply to this email to get in touch with me`,
					'br'
				)}
        ${footer}`
			];
		case 'CLIENT_CONFIRM_BOOKING':
			return [
				client.email,
				`Booking confirmed for ${moment
					.unix(booking.timestamp)
					.format('h:mm a dddd Do')}`,
				`${header}
        ${heading(`Hi ${client.name}`)}
        ${paragraph(
					`Thank you for booking a call to discuss your web application.`
				)}
        ${paragraph(
					` I will give you a call on ${client.phone} at ${moment
						.unix(booking.timestamp)
						.format('h:mm a dddd Do MMMM YYYY')}`,
					'br'
				)}
        ${paragraph(
					`Click this link if you need to <a class="cancel-link a" href="${actionLink}" style="color: #AB3351; text-decoration: none;"><span class="a__text" style="color: #AB3351; text-decoration: none;">Cancel your booking</span></a>`,
					'br'
				)}
        ${paragraph(
					`Feel free to reply to this email to get in touch with me.`,
					'br'
				)}
        ${paragraph(`I look forward to speaking with you!`, 'br')}
        ${footer}`
			];
		case 'ADMIN_CONFIRM_BOOKING':
			return [
				process.env.ADMIN_EMAIL,
				`New call booking at ${moment
					.unix(booking.timestamp)
					.format('h:mm a dddd Do')}`,

				`${header}
          ${heading(`Hi ${process.env.ADMIN_NAME}`)}
          ${paragraph(` You have received a new call booking.`)}
          ${paragraph(`Name: ${client.name}`, 'br')}
          ${paragraph(
						`Time: ${moment
							.unix(booking.timestamp)
							.format('h:mma dddd Do MMMM YYYY')}`,
						'br'
					)}
              ${paragraph(`Phone: ${client.phone}`, 'br')}
              ${paragraph(`Email: ${client.email}`, 'br')}
              ${paragraph(`Description: ${booking.description}`, 'br')}
              ${paragraph(
								`<a class="cancel-link a" href="${actionLink}" style="color: #AB3351; text-decoration: none;"><span class="a__text" style="color: #AB3351; text-decoration: none;">Cancel booking</span></a>`,
								'br'
							)}
          ${footer}`
			];
		case 'BOOKING_CANCEL_BY_CLIENT_TO_CLIENT':
			return [
				client.email,
				`Booking Cancelled`,
				`${header}
        ${heading(`Hi ${client.name}`)}
        ${paragraph(
					`Your booking has successfully been cancelled. Feel free to make another booking anytime!`
				)}
        ${footer}`
			];
		case 'BOOKING_CANCEL_BY_CLIENT_TO_ADMIN':
			return [
				process.env.ADMIN_EMAIL,
				`Booking Cancelled by client: ${moment
					.unix(booking.timestamp)
					.format('h:mm a dddd Do')}`,
				`${header}
        ${heading(`Hi ${process.env.ADMIN_NAME},`)}
        ${paragraph(`A client has cancelled their booking`)}
        ${paragraph(`Name: ${client.name}`, 'br')}
        ${paragraph(
					`Time: ${moment
						.unix(booking.timestamp)
						.format('h:mma dddd Do MMMM YYYY')}`,
					'br'
				)}
            ${paragraph(`Phone: ${client.phone}`, 'br')}
            ${paragraph(`Email: ${client.email}`, 'br')}
            ${paragraph(`Description: ${booking.description}`, 'br')}
        ${footer}`
			];
		case 'BOOKING_CANCEL_BY_ADMIN_TO_CLIENT':
			return [
				client.email,
				`Your booking has been cancelled`,
				`${header}
        ${heading(`Hi ${client.name},`)}
        ${paragraph(
					`I'm sorry for the inconvenience, but your booking has been cancelled.`
				)}
        ${paragraph(
					`I will be in touch to arrange another call. <br/><br/>You can also contact me by replying to this email, or by booking another call.`,
					'br'
				)}
        ${footer}`
			];
		case 'BOOKING_CANCEL_BY_ADMIN_TO_ADMIN':
			return [
				process.env.ADMIN_EMAIL,
				`You have cancelled a booking: ${moment
					.unix(booking.timestamp)
					.minute(0)
					.format('h:mma dddd Do')}`,

				`${header}
          ${heading(`Hi ${process.env.ADMIN_NAME},`)}
          ${paragraph(`You have cancelled a booking`)}
          ${paragraph(`Name: ${client.name}`, 'br')}
          ${paragraph(
						`Time: ${moment
							.unix(booking.timestamp)
							.format('h:mma dddd Do MMMM YYYY')}`,
						'br'
					)}
              ${paragraph(`Phone: ${client.phone}`, 'br')}
              ${paragraph(`Email: ${client.email}`, 'br')}
              ${paragraph(`Description: ${booking.description}`, 'br')}
          ${footer}`
			];
		default:
			break;
	}
};

export default useHtmlTemplate;
