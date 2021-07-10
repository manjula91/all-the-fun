import React, { Fragment } from 'react'

import Header from './header'

const text = `
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<style type="text/css">
	#mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}
	#mergeRow-gdpr {margin-top: 20px;}
	#mergeRow-gdpr fieldset label {font-weight: normal;}
	#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
</style>
<div id="mc_embed_signup">
<form action="https://reactindia.us18.list-manage.com/subscribe/post?u=330cfb92851db682d23d7eae9&amp;id=b8d9dedc6f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe to our mailing list</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name </label>
	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Last Name </label>
	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
</div>
<div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
    <div class="content__gdpr">
        <label>Marketing Permissions</label>
        <p>React India, represented by  Geekabyte, will use the information you provide on this form to be in touch with you and to provide updates and marketing. Please let us know all the ways you would like to hear from us:</p>
        <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
		<label class="checkbox subfield" for="gdpr_51707"><input type="checkbox" id="gdpr_51707" name="gdpr[51707]" value="Y" class="av-checkbox "><span>Email</span> </label>
        </fieldset>
        <p>“By entering your e-mail address and clicking the button below, you confirm that you are 16 years or older. You agree that the React India represented by Geekabyte India (Apherio Tech Private Limited) will use the data and information provided by you in connection with the use of the newsletter to regularly send you information about the React India by e-mail. By clicking below, you agree that React India may process your information in accordance with these terms. You can change your mind at any time by clicking the unsubscribe link in the footer of any e-mail you receive from us, or by contacting us at info@geekabyte.tech. React India will treat your information with respect. For further information, please see our privacy policy on our website.”</p>
    </div>
    <div class="content__gdprLegal">
        <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
    </div>
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_330cfb92851db682d23d7eae9_b8d9dedc6f" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->`

export default () => (
	<Fragment>
		<Header hardRefresh />
		<div dangerouslySetInnerHTML={{ __html: text }} />
	</Fragment>
)
