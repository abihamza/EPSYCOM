document.addEventListener("deviceready", onDeviceReady, true);
        function exitFromApp()
        { 
		navigator.notification.confirm("Voulez vraiment quitter ?", onConfirm, "Confirmation", "Oui,Non");
            
        }
		function onConfirm(button) {
			if(button==2){//If User selected No, then we just do nothing
        return;
    }else{
        navigator.app.exitApp();// Otherwise we quit the app.
    }
}

