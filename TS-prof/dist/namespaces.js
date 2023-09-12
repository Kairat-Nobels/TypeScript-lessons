"use strict";
var FormNamespace;
(function (FormNamespace) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state,
            };
        }
    }
    FormNamespace.myForm = new MyForm('kairat@gmail.com');
})(FormNamespace || (FormNamespace = {}));
console.log(FormNamespace.myForm);
//# sourceMappingURL=namespaces.js.map