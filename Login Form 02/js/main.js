$( document ).ready(function() 
{

	'use strict';
	
	/* Start Popup Login/Sign up Form */
	function setupPopupLoginSignupForms()
	{

		// Switch between forms
		var dismiss        = $('.form-container .forms-wrapper #dismiss');
		var overlay        = $('.overlay');
		var signUpForm     = $('.form-container .forms-wrapper .signupform-wrapper');
		var signInForm     = $('.form-container .forms-wrapper .loginform-wrapper');
		var switchToSignUp = $('.form-container .forms-wrapper #switchToSignUp');
		var switchToSignIn = $('.form-container .forms-wrapper #switchToSignIn');
		var hide = 'none';
		var show = 'block';

		// Hide Everything
		dismiss.on('click', function(e)
		{
			e.preventDefault();
			overlay.css('display', hide);
		});
		// Go to SignUp form
		switchToSignUp.on('click', function(e)
		{
			e.preventDefault();
			signUpForm.css('display', show).siblings().css('display', hide);
		});
		// Go to SignIn form
		switchToSignIn.on('click', function(e)
		{
			e.preventDefault();
			signInForm.css('display', show).siblings().css('display', hide);
		});

	}
	/* End Popup Login/Sign up Form */

	// Call All Functions
	setupPopupLoginSignupForms();

});