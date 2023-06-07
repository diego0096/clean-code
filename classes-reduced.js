class UserAuth {
    constructor(user) {
        this.user = user;;
    }

    verifyCredentials() {
        return true;
    }
}

class UserSettings extends UserAuth {
    constructor(user, settings) {
        super(user);
        this.settings = settings;;
    }

    changeSettings(settings) {
        if(this.verifyCredentials()) {
            console.log("Puede modificar su configuración")
        }
        console.log("No tiene acceso")
    }
}

const newAcces = new UserSettings("Diego", "Dark Mode");
newAcces.changeSettings();