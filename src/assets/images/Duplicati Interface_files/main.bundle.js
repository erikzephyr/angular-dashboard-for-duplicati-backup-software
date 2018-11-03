webpackJsonp([0,3],{

/***/ 1189:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(527);
module.exports = __webpack_require__(525);


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = moveIn;
/* harmony export (immutable) */ __webpack_exports__["b"] = fallIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = moveInLeft;

function moveIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* trigger */])('moveIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: '0', transform: 'translateX(100px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('.6s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: '1', transform: 'translateX(0)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('.3s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* trigger */])('fallIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: '0', transform: 'translateY(40px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('.4s .2s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: '1', transform: 'translateX(0)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('.3s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* trigger */])('moveInLeft', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: '0', transform: 'translateX(-100px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('.6s .2s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}
//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/router.animations.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenadoresComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdenadoresComponent = (function () {
    /**
     * Comprueba la sesión e inicializa las variables.
     */
    function OrdenadoresComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.listaDeOrdenadores = new Array();
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.nombre = auth;
            }
        });
        this.revisado = false;
        this.estados = ['default', 'Succes', 'Error', 'Warning'];
        this.estadosCopias = new Array();
        this.bActualmente = false;
        this.nActualmente = "Pendiente";
        this.cActualmente = "ui inverted red button";
        this.ordenadores = af.database.list('/empresas/' + this.id + '/ordenadores');
    }
    /**
     * Añade un nuevo ordenador sin modificar lo anterior.
     */
    OrdenadoresComponent.prototype.nuevoOrdenadorNoDestructivo = function (newIP) {
        var empresas = this;
        // Añade la dirección a /ordenadores
        this.pc = this.af.database.object('/empresas/' + this.id + '/ordenadores');
        var identificador = this.af.database.list('/empresas/' + this.id).$ref.ref.child("ordenadores").push().key;
        this.pc.update((_a = {}, _a[identificador] = newIP, _a));
        // Añade la copia correspondiente a esa ip.
        this.pc = this.af.database.object('/empresas/' + this.id + '/copias');
        var aux = this.af.database.list('/empresas/' + this.id).$ref.ref.child("copias").child(identificador).push().key;
        this.pc.update((_b = {}, _b[identificador] = (_c = {}, _c[aux] = { estado: "default", fecha: "" }, _c), _b));
        // Añade la copia con revision correspondiente a esa ip.
        this.pc = this.af.database.object('/empresas/' + this.id + '/revisado');
        var aux = this.af.database.list('/empresas/' + this.id).$ref.ref.child("copias").child(identificador).push().key;
        this.pc.update((_d = {}, _d[identificador] = (_e = {}, _e[aux] = { revisado: "no" }, _e), _d));
        var _a, _b, _c, _d, _e;
    };
    /**
     * Elimina el ordenador actual.
     */
    OrdenadoresComponent.prototype.borrar = function (ip) {
        var empresas = this;
        console.log(ip);
        this.pc = this.af.database.object('/empresas/' + this.id + '/ordenadores/' + ip);
        this.pc.remove();
    };
    /**
     * Abre la interfaz de duplicati.
     */
    OrdenadoresComponent.prototype.administrar = function (item) {
        console.log(item);
        open('http://' + item);
    };
    /**
     * Muestra el número de ordenadores de la empresa.
     */
    OrdenadoresComponent.prototype.numCopias = function (pcKey) {
        this.af.database.list('/empresas/' + this.id).$ref.ref.child("copias").child(pcKey).on("value", function (snapshot) {
            this.nCopias = snapshot.numChildren();
        }, this);
        return this.nCopias - 1;
    };
    /**
     * Vuelve al cofmponente EmpresasComponent.
     */
    OrdenadoresComponent.prototype.volver = function () {
        this.router.navigateByUrl('/empresas');
    };
    /**
     * Cierra la sesión actual.
     */
    OrdenadoresComponent.prototype.cerrarSesion = function () {
        this.af.auth.logout();
        this.router.navigateByUrl('/login');
    };
    /**
     * Establece el id de la empresa que queremos ver.
     */
    OrdenadoresComponent.prototype.setID = function (nID) {
        this.id = nID;
    };
    /**
     * Obtiene el estado de las copias.
     */
    OrdenadoresComponent.prototype.obtenerCopias = function () {
        var th = this;
        var db = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]();
        var ref = db.ref('/empresas/' + this.id + '/copias/');
        ref.on('value', th.obtenerListaPcs, th);
    };
    OrdenadoresComponent.prototype.obtenerListaPcs = function (snapshot) {
        var i, j, k, l, copias, keys2, keys, pcs, th, est, db, ref, warning, error;
        th = this;
        pcs = snapshot.val();
        keys = Object.keys(pcs);
        db = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]();
        th.estadoCopias = new Array();
        th.listaDeCopias = new Array();
        var aux = new Array();
        warning = false;
        error = false;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            i = keys_1[_i];
            pcs = snapshot.child(i).val();
            keys2 = Object.keys(pcs);
            for (var _a = 0, keys2_1 = keys2; _a < keys2_1.length; _a++) {
                j = keys2_1[_a];
                copias = snapshot.child(i).child(j).child('estado').exportVal();
                aux.push(copias);
            }
            th.listaDeCopias.push(aux);
            aux = new Array();
        }
        this.pc = this.af.database.object('/empresas/' + th.id);
        for (var _b = 0, _c = th.listaDeCopias; _b < _c.length; _b++) {
            i = _c[_b];
            console.log(i);
            var l = i.length;
            if (i[l - 1] == 'Warning') {
                warning = true;
            }
            else if (i[l - 1] == 'Error') {
                warning = false;
                error = true;
            }
        }
        console.log('error: ' + error + ', warning: ' + warning);
        if (warning == true) {
            this.pc.update({ estado: 'Warning' });
        }
        else if (error == true) {
            this.pc.update({ estado: 'Error' });
        }
        else if (this.default == true) {
            this.pc.update({ estado: 'default' });
        }
        else {
            this.pc.update({ estado: 'Ok' });
        }
    };
    OrdenadoresComponent.prototype.obtenerListaCopias = function (cp) {
        var cps = cp.val();
        var keys = Object.keys(cps);
        //console.log(keys);
    };
    OrdenadoresComponent.prototype.setLlave = function (l) {
        this.llave = l;
    };
    OrdenadoresComponent.prototype.obtenerEstado = function (pc) {
        var th = this;
        var db = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]();
        var ref = db.ref('/empresas/' + this.id + '/copias/' + pc);
        ref.on('value', th.getEstado, th);
        switch (this.actual) {
            case 'default':
                this.actual = 'default';
                break;
            case 'Ok':
                this.actual = 'Ok';
                break;
            case 'Error':
                this.actual = 'Error';
                break;
            case 'Warning':
                this.actual = 'Warning';
                break;
            default: break;
        }
        return this.actual;
    };
    OrdenadoresComponent.prototype.getEstado = function (snapshot) {
        var pcs, keys, db, th, keys2, i, j, ultimaCopia;
        th = this;
        pcs = snapshot.val();
        keys = Object.keys(pcs);
        db = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]();
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            i = keys_2[_i];
            ultimaCopia = snapshot.child(i).child('estado').val();
        }
        this.actual = ultimaCopia;
    };
    OrdenadoresComponent.prototype.obtenerRevisado = function (pc) {
        var th = this;
        var db = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]();
        var ref = db.ref('/empresas/' + this.id + '/revisado/' + pc);
        ref.on('value', th.getRevisado, th);
    };
    OrdenadoresComponent.prototype.getRevisado = function (snapshot) {
        var pcs, keys, db, th, keys2, i, j, ultimaCopia;
        th = this;
        pcs = snapshot.val();
        keys = Object.keys(pcs);
        db = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]();
        for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
            i = keys_3[_i];
            ultimaCopia = snapshot.child(i).child('revisado').val();
            console.log(ultimaCopia);
        }
        this.revisado = ultimaCopia;
    };
    OrdenadoresComponent.prototype.cambiarRevisado = function (pc) {
        console.log('hola');
        var th = this;
        var db = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]();
        var ref = db.ref('/empresas/' + this.id + '/revisado/' + pc);
        this.pcParaRevisado = pc;
        ref.on('value', th.setRevisado, th);
    };
    OrdenadoresComponent.prototype.setRevisado = function (snapshot) {
        var pcs, keys, db, th, keys2, i, j, ultimaCopia;
        th = this;
        pcs = snapshot.val();
        keys = Object.keys(pcs);
        db = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]();
        for (var _i = 0, keys_4 = keys; _i < keys_4.length; _i++) {
            i = keys_4[_i];
            console.log('adios');
            this.pc = this.af.database.object('/empresas/' + th.id + '/revisado/' + this.pcParaRevisado + '/' + i);
            if (this.revisado == 'si') {
                this.pc.update({ revisado: 'no' });
            }
            else if (this.revisado == 'no') {
                this.pc.update({ revisado: 'si' });
            }
        }
    };
    //---------------------------------------------------------------------------------------------------
    /**
      * Actualiza el estado de la revisión. (Pendiente o Revisado)
      */
    OrdenadoresComponent.prototype.actualmente = function (llave) {
        this.obtenerRevisado(llave);
        this.cambiarRevisado(llave);
        if (this.revisado == 'no') {
            this.bActualmente = true;
            this.nActualmente = "Revisado";
            this.cActualmente = "ui inverted green button";
        }
        else if (this.revisado == 'si') {
            this.bActualmente = false;
            this.nActualmente = "Pendiente";
            this.cActualmente = "ui inverted red button";
        }
    };
    //---------------------------------------------------------------------------------------------------
    OrdenadoresComponent.prototype.getID = function () {
        return this.id;
    };
    OrdenadoresComponent.prototype.cualEliminar = function (llave, ip) {
        this.pcActualIp = ip;
        this.pcActualLlave = llave;
    };
    OrdenadoresComponent.prototype.ngOnInit = function () {
        this.obtenerCopias();
    };
    OrdenadoresComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-ordenadores',
            template: __webpack_require__(893),
            styles: [__webpack_require__(814)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["c" /* moveInLeft */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], OrdenadoresComponent);
    return OrdenadoresComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/ordenadores.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_angularfire2__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].from(this.auth)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_angularfire2__["a" /* AngularFireAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2_angularfire2__["a" /* AngularFireAuth */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/auth.service.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailComponent = (function () {
    function EmailComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.state = '';
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/empresas');
            }
        });
    }
    EmailComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.login({
                email: formData.value.email,
                password: formData.value.password
            }, {
                provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthProviders */].Password,
                method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthMethods */].Password,
            }).then(function (success) {
                console.log(success);
                _this.router.navigateByUrl('/empresas');
                //this.router.navigate(['/empresas']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-email',
            template: __webpack_require__(890),
            styles: [__webpack_require__(811)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], EmailComponent);
    return EmailComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/email.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ordenadores_ordenadores_component__ = __webpack_require__(277);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmpresasComponent = (function () {
    /**
     * Comprueba la sesión e inicializa las variables.
     */
    function EmpresasComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.estados = ['default', 'Ok', 'Error', 'Warning'];
        this.actual = 'default';
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.nombre = auth;
            }
        });
        this.empresas = af.database.list('/empresas');
    }
    /*
     *  Este método borra toda la base datos por el nuevo valor.
     */
    EmpresasComponent.prototype.nuevaEmpresaDestructivo = function (nEmpresa, nDescripcion) {
        this.empresa = this.af.database.object('/empresas');
        this.empresa.set((_a = {}, _a[nEmpresa] = { descripcion: nDescripcion, estado: 'default', copias: 1, ordenadores: {} }, _a));
        var _a;
    };
    /*
    * Este método añade un nuevo valor sin borrar lo anterior.
    */
    EmpresasComponent.prototype.nuevaEmpresaNoDestructivo = function (nEmpresa, nDescripcion) {
        this.empresa = this.af.database.object('/empresas');
        this.empresa.update((_a = {}, _a[nEmpresa] = { descripcion: nDescripcion, estado: 'default', copias: 1, ordenadores: {} }, _a));
        var _a;
    };
    /*
    * Borra la empresa actual.
    */
    EmpresasComponent.prototype.borrar = function (empresa) {
        this.empresa = this.af.database.object('/empresas/' + empresa);
        this.empresa.remove();
    };
    /**
     * Método que gestiona el estado de la empresa.
     */
    EmpresasComponent.prototype.obtenerEstado = function (empresa) {
        var th = this;
        this.empresa = this.af.database.object('/empresas/' + empresa + '/estado');
        this.empresa.$ref.on('value', th.getEstado, th);
        switch (this.actual) {
            case 'default':
                this.actual = 'default';
                break;
            case 'Ok':
                this.actual = 'Ok';
                break;
            case 'Error':
                this.actual = 'Error';
                break;
            case 'Warning':
                this.actual = 'Warning';
                break;
            default: break;
        }
        return this.actual;
    };
    EmpresasComponent.prototype.getEstado = function (snapshot) {
        this.actual = snapshot.val();
    };
    /**
     * Muestra el número de ordenadores que tiene una empresa.
     */
    EmpresasComponent.prototype.mostrarNum = function (empresa) {
        this.af.database.list('/empresas/' + empresa).$ref.ref.child("ordenadores").on("value", function (snapshot) {
            var aux = snapshot.numChildren();
            this.numPcs = aux;
        }, this);
        return this.numPcs;
    };
    /**
     * Método que cierra la sesión actual del usuario.
     */
    EmpresasComponent.prototype.cerrarSesion = function () {
        this.af.auth.logout();
        this.router.navigateByUrl('/login');
    };
    /**
     * Este método redirige al usuario a ver los ordenadores de la empresa pasada por parámetro.
     */
    EmpresasComponent.prototype.ordenadores = function (empresa) {
        __WEBPACK_IMPORTED_MODULE_4__ordenadores_ordenadores_component__["a" /* OrdenadoresComponent */].prototype.setID(empresa);
        this.router.navigateByUrl('/ordenadores/' + empresa);
    };
    EmpresasComponent.prototype.ngOnInit = function () {
    };
    EmpresasComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-empresas',
            template: __webpack_require__(891),
            styles: [__webpack_require__(812)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["c" /* moveInLeft */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], EmpresasComponent);
    return EmpresasComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/empresas.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/empresas');
            }
        });
    }
    LoginComponent.prototype.loginFb = function () {
        var _this = this;
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthProviders */].Facebook,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthMethods */].Popup,
        }).then(function (success) {
            _this.router.navigate(['/empresas']);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthMethods */].Popup,
        }).then(function (success) {
            _this.router.navigate(['/empresas']);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(892),
            styles: [__webpack_require__(813)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/login.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(af, router) {
        this.af = af;
        this.router = router;
        this.state = '';
    }
    SignupComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.createUser({
                email: formData.value.email,
                password: formData.value.password
            }).then(function (success) {
                _this.router.navigate(['/empresas']);
            }).catch(function (err) {
                _this.error = err;
            });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__(894),
            styles: [__webpack_require__(815)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/signup.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 524;


/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(643);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/main.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(889),
            styles: [__webpack_require__(810)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/app.component.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__email_email_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__empresas_empresas_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_service__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ordenadores_ordenadores_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_lightning_ng_lightning__ = __webpack_require__(860);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// Must export the config
var firebaseConfig = {
    apiKey: 'AIzaSyA3tztC041cbm8D1mP596lLw9n2OnNZmGU',
    authDomain: 'duplicati-25268.firebaseapp.com',
    databaseURL: 'https://duplicati-25268.firebaseio.com',
    storageBucket: 'duplicati-25268.appspot.com',
    messagingSenderId: '167975600860'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__email_email_component__["a" /* EmailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__empresas_empresas_component__["a" /* EmpresasComponent */],
                __WEBPACK_IMPORTED_MODULE_12__ordenadores_ordenadores_component__["a" /* OrdenadoresComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routes */],
                __WEBPACK_IMPORTED_MODULE_13_ng_lightning_ng_lightning__["a" /* NglModule */].forRoot()
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__auth_service__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/app.module.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empresas_empresas_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ordenadores_ordenadores_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_email_component__ = __webpack_require__(411);
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });







var router = [
    { path: '', redirectTo: 'login-email', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login-email', component: __WEBPACK_IMPORTED_MODULE_6__email_email_component__["a" /* EmailComponent */] },
    { path: 'ordenadores/:id', component: __WEBPACK_IMPORTED_MODULE_3__ordenadores_ordenadores_component__["a" /* OrdenadoresComponent */] },
    { path: 'empresas', component: __WEBPACK_IMPORTED_MODULE_2__empresas_empresas_component__["a" /* EmpresasComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthGuard */]] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(router);
//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/app.routes.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/environment.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/zephyr/Github/duplicati_interface/src/polyfills.js.map

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)(false);
// imports


// module
exports.push([module.i, ".txt {\n    padding-left: 15%;\n    font-size: 16px;\n    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;\n    width: 100%;\n}\n\n.uk-form-icon {\n    padding-top: 3%;\n    padding-left: 5%;\n    height: 50px;\n    width: 50px;\n}\n\n.form-container {\n    margin-top: 5%;\n}\n.ui.button:disabled {\n    opacity: .6!important;\n}\n\n.uk-input {\n    width: 100%;\n}\n\n.acceder {\n    \n    width: 300px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)(false);
// imports


// module
exports.push([module.i, "\n.navegacion {\n  background-color: #3D3E3F;\n}\nlist-item {\n  display: block;\n  background: white;\n  font-size: 1em;\n  padding: 20px;\n  height: 100px;\n  line-height: 1.2em;\n  overflow: hidden;\n  }\n\na {\n  color: white;\n}\n\n.uk-card {\n  margin-top: 20px;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nh3 {\n  text-align: center;\n}\n\np {\n  text-align: justify;\n}\n\n#add {\n  width: 100%;\n}\n\n#container{\n  overflow: scroll;\n}\n.content-container {\n  height: 100%;\n}\n.content-scroll-container {\n  overflow-y: scroll;\n}\n.FixedHeightContainer\n{\n  float:right;\n  height: auto;\n  width:auto;\n}\n.content\n{\n  height:2240px;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.scroll {\n  overflow: scroll;\n  padding-bottom: 100%;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)(false);
// imports


// module
exports.push([module.i, "#lock {\n    width:40%;\n    margin: 1.5em auto 4em auto;\n    display:block;\n}\n\n#fb {\n    background:#3B5998 url(" + __webpack_require__(817) + ") no-repeat 14px 6px;\n    background-size: 47px;\n    color:#fff;\n}\n\n#google {\n    border: 1px solid #95989A;\n    background: #fff  url(" + __webpack_require__(818) + ") no-repeat 25px;\n    background-size: 25px;\n}\n\n#email {\n    background: #ECECEC  url(" + __webpack_require__(816) + ") no-repeat 25px;\n    background-size: 25px;\n}\n\n@media (max-width: 600px) {\n    #page {\n        padding:1em;\n    }\n    #toolbar {\n        width:90%;\n        margin-left: -45%;\n    }\n    #fb {\n        background:#3B5998;\n    }\n\n    #google {\n        background: #fff;\n    }\n\n    #email {\n        background: #ECECEC;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)(false);
// imports


// module
exports.push([module.i, ".navegacion {\n  background-color: #3D3E3F;\n}\n\na {\n  color: white;\n\n}\n\nbutton {\n  color: black;\n  background-color: white;\n}\n\n.uk-card {\n  margin-top: 20px;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nh3 {\n  text-align: center;\n}\n\np {\n  text-align: justify;\n}\n\n#add {\n  width: 100%;\n}\n\n#container{\n  margin: auto;\n  overflow: hidden;\n}\n.content-container {\n  height: 100%;\n}\n.content-scroll-container {\n  overflow-y: scroll;\n}\n.scroll {\n  overflow: scroll;\n  padding-bottom: 100%;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "email.e75a0390ebcf4b02d1bd.svg";

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "facebook.d526b8a8c08d30bc0c96.svg";

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "google.45dff0bab1cfddd02551.svg";

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "<div id=\"login\">\n  <div class=\"form-container\">\n    <!--<a routerLink=\"/login\" id=\"goback\">Go back</a>-->\n    <img src=\"../assets/images/logo_copias_seguridad.png\" style=\"padding-bottom: 20%; padding-top: 10%; background-color: white; height:70%; width: 70%; left: 15%; position:relative;\"alt=\"\">\n\n    <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\n\n    <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n      <!-- Usuario -->\n      <div class=\"uk-margin\">\n        <div class=\"uk-inline uk-width-1-1\">\n            <span class=\"uk-form-icon\" uk-icon=\"icon: user\"></span>\n            <input type=\"text\" placeholder=\"Dirección de correo . . .\" (ngModel)=\"email\" name=\"email\" class=\"txt\" required>\n        </div>\n    </div>\n\n    <!-- Password -->\n    <div class=\"uk-margin\">\n        <div class=\"uk-inline uk-width-1-1\">\n            <span class=\"uk-form-icon\" uk-icon=\"icon: lock\"></span>\n            <input type=\"password\" placeholder=\"Contraseña . . .\" (ngModel)=\"password\" name=\"password\" class=\"txt\" required>\n        </div>\n    </div>\n    <button class=\"fluid positive ui button\" type=\"submit\" [disabled]=\"!formData.valid\">Acceder</button>\n    <a routerLink=\"/signup\" class=\"alc\">No tengo cuenta, quiero crear una...</a>\n    </form>\n    \n  </div>\n</div>\n\n"

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "<!-- MENU -->\n<!--<div class=\"ui menu\">\n  <div class=\"header item\" style=\"font-size: 24px;\">\n    Binhex Copias de seguridad\n  </div>\n  <a class=\"item\" href=\"#\" style=\"font-size: 24px;\">\n    Inicio\n  </a>\n  <a class=\"item\" uk-toggle=\"target: #modal-add\" style=\"font-size: 24px;\">Añadir empresa</a>\n  <div class=\"right menu\">\n    <a class=\"item\" (click)=\"cerrarSesion()\"  style=\"font-size: 24px;\">Cerrar sesión</a>\n  </div>\n</div>-->\n\n<div class=\"uk-offcanvas-content\">\n    \n    <div style=\"padding-left: 1%; padding-top: 1%; padding-right: 1%; padding-bottom: 1%; background-color: rgba(33, 33, 33, .8);\">\n        <button class=\"circular ui icon button\"type=\"button\" uk-toggle=\"target: #offcanvas-nav\" style=\"height: 60px; width: 60px; color: rgba(33, 33, 33, .8); background-color: whitesmoke;\"><i class=\"home icon large\"></i></button>\n        <button class=\"circular ui icon button\"type=\"button\" uk-toggle=\"target: #modal-add\" style=\"height: 60px; width: 60px; color: rgba(33, 33, 33, .8);; background-color: whitesmoke;\"><i class=\"users icon large\"></i></button>\n        <button class=\"circular ui icon button right floated\" (click)=\"cerrarSesion()\" type=\"button\" style=\"right: 10%; height: 60px; width: 60px; color: rgba(33, 33, 33, .8); background-color: whitesmoke;\"><i class=\"power icon large\"></i></button>\n        <div>\n            <h2 style=\"width: \">Hola Erikazo</h2>\n            <img class=\"ui medium circular image right floated\" style=\"height: 60px; width: 60px;\" src=\"../../assets/images/avatar.png\">\n        </div>\n        \n        \n    </div>\n    \n    <div id=\"offcanvas-nav\" uk-offcanvas=\"mode: push; overlay: true\">\n        <div class=\"uk-offcanvas-bar  uk-flex uk-flex-column\">\n            <div style=\"background-color: white; width: 100%\">\n                    <img src=\"../../assets/images/logo_copias_seguridad.png\" alt=\"\">\n                    \n                </div> \n                \n            <ul class=\"uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical\">                   \n                <li class=\"uk-parent\">\n                    <h3 href=\"#\">Menú</h3>\n                    <ul class=\"uk-nav-sub\">\n                        <li><a href=\"#\">Inicio</a></li>\n                        <li><a (click)=\"cerrarSesion()\">Cerrar Sesión</a></li>\n                    </ul>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n\n\n\n<!-- Administrar pcs -->\n<div id=\"modal-add\" uk-modal=\"center: true\">\n  <div class=\"uk-modal-dialog\">\n        <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n        <div class=\"uk-modal-header\">\n            <h2 class=\"uk-modal-title\">Añadir una nueva empresa</h2>\n        </div>\n        <div class=\"uk-modal-body\">\n             <form class=\"ui form\">\n                <div class=\"required field\">\n                  <label>Nombre de la empresa</label>\n                  <input type=\"text\" #empresa placeholder=\"Nombre de la empresa...\">\n                </div>\n                <div class=\"field\">\n                  <label>Descripción</label>\n                  <textarea rows=\"2\" #desc placeholder=\"¿Quién es esta empresa?...\"></textarea>\n                </div>\n            </form>\n        </div>\n        <div class=\"uk-modal-footer uk-text-right\">\n            <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancelar</button>\n            <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\" (click)=\"nuevaEmpresaNoDestructivo(empresa.value, desc.value)\">Añadir</button>\n        </div>\n    </div>\n</div>\n\n<!-- Empresas -->\n<div class=\"scroll\" style=\"padding-top: 20px;\">\n  <div>\n    <h2 class=\"ui center aligned icon header\">\n      <i class=\"users icon\"></i>\n      Listado de empresas\n    </h2>\n    <table class=\"uk-table uk-table-middle uk-table-divider uk-table-hover\">\n    <thead>\n        <tr>\n            <th class=\"uk-width-small\">Nombre de la empresa</th>\n            <th class=\"uk-table-expand\">Descripción</th>\n            <th class=\"uk-width-small\">Número de pcs</th>\n            <th class=\"uk-width-small\">Estado</th>\n            <th class=\"uk-width-small\">Ver ordenadores</th>\n            <th class=\"uk-width-small\">Eliminar empresa</th>\n        </tr>\n    </thead>\n    <tbody *ngFor=\"let item of empresas | async; let i = index\" data-index=\"i\">\n        <tr>\n            <td>{{ item.$key }}</td>\n            <td>{{ item.descripcion }}</td>\n            <td>{{ mostrarNum(item.$key) }}</td>\n            <td>\n              <i *ngIf=\"obtenerEstado(item.$key) == 'Error'\" i class=\"red circle icon\"></i>\n              <i *ngIf=\"obtenerEstado(item.$key) == 'Ok'\" i class=\"green circle icon\"></i>\n              <i *ngIf=\"obtenerEstado(item.$key) == 'Warning'\" i class=\"yellow circle icon\"></i>\n              <i *ngIf=\"obtenerEstado(item.$key) == 'default'\" i class=\"circle icon\"></i>\n            </td>\n            <td><button class=\"positive ui button\" (click)=\"ordenadores(item.$key)\">Ver</button></td>\n            <td><button class=\"uk-button uk-button-default negative ui button\" type=\"button\" uk-toggle=\"target: #modal-eliminar\">Eliminar</button></td>\n            <div id=\"modal-eliminar\" uk-modal=\"center: true\">\n              <div class=\"uk-modal-dialog\">\n                    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n                    <div class=\"uk-modal-header\">\n                        <h2 class=\"uk-modal-title\">¿Seguro que desea eliminar {{ item.$key }}?</h2>\n                    </div>\n                    <div class=\"uk-modal-body\">\n                        <p>Si le das a aceptar elimina permanentemente la empresa y todos sus ordenadores.</p>\n                    </div>\n                    <div class=\"uk-modal-footer uk-text-right\">\n                        <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancelar</button>\n                        <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\" (click)=\"borrar(item.$key)\">Sí, eliminar</button>\n                    </div>\n                </div>\n            </div>\n        </tr>\n        \n    </tbody>\n</table>\n</div>\n</div>"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <img src=\"../../assets/images/lock.svg\" id=\"lock\">\n\n    <span class=\"error\" *ngIf=\"error\">{{ error }}</span>\n\n  <button (click)=\"loginFb()\" id=\"fb\">Login con Facebook</button><br>\n  <button (click)=\"loginGoogle()\" id=\"google\">Login With Google</button>\n  <button routerLink=\"/login-email\" id=\"email\">Email</button>\n\n  <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"alc\">No account? <strong>Create one here</strong></a>\n</div>\n"

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = "<!-- Menu de navegación -->\n<!--<div class=\"ui menu\">\n  <div class=\"header item\" style=\"font-size: 24px;\">\n    Binhex Copias de seguridad\n  </div>\n  <a class=\"item\" href=\"#\" style=\"font-size: 24px;\">\n    Inicio\n  </a>\n  <a class=\"item\" uk-toggle=\"target: #modal-add\" style=\"font-size: 24px;\">Añadir ordenador</a>\n  <div class=\"right menu\">\n    <a class=\"item\" (click)=\"volver()\"  style=\"font-size: 24px;\">Volver</a>\n    <a class=\"item\" (click)=\"cerrarSesion()\"  style=\"font-size: 24px;\">Cerrar sesión</a>\n  </div>\n</div>-->\n\n<div class=\"uk-offcanvas-content\">\n    \n    <div style=\"padding-left: 1%; padding-top: 1%; padding-right: 1%; padding-bottom: 1%; background-color: rgba(33, 33, 33, .8);\">\n        <button class=\"circular ui icon button\"type=\"button\" uk-toggle=\"target: #offcanvas-nav\" style=\"height: 60px; width: 60px; color: rgba(33, 33, 33, .8); background-color: whitesmoke;\"><i class=\"home icon large\"></i></button>\n        <button class=\"circular ui icon button\"type=\"button\" uk-toggle=\"target: #modal-add\" style=\"height: 60px; width: 60px; color: rgba(33, 33, 33, .8);; background-color: whitesmoke;\"><i class=\"desktop icon large\"></i></button>\n        <form class=\"uk-search uk-search-navbar\">...</form>\n\n        <button class=\"circular ui icon button right floated\" (click)=\"cerrarSesion()\" type=\"button\" style=\"right: 10%; height: 60px; width: 60px; color: rgba(33, 33, 33, .8); background-color: whitesmoke;\"><i class=\"power icon large\"></i></button>\n        <button class=\"circular ui icon button right floated\" (click)=\"volver()\" type=\"button\" style=\"right: 10%; height: 60px; width: 60px; color: rgba(33, 33, 33, .8); background-color: whitesmoke;\"><i class=\"arrow left icon large\"></i></button>        \n    </div>\n    \n    <div id=\"offcanvas-nav\" uk-offcanvas=\"mode: push; overlay: true\" style=\"width: 100%\">\n        <div class=\"uk-offcanvas-bar\">\n\n            <ul class=\"uk-nav uk-nav-default\">\n                <li class=\"uk-active\"><h2 href=\"#\">Binhex System Backups</h2></li>\n                <li class=\"uk-parent\">\n                    <h3 href=\"#\">Menú</h3>\n                    <ul class=\"uk-nav-sub\">\n                        \n                    </ul>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n\n<!-- Administrar pcs -->\n<div id=\"modal-add\" uk-modal=\"center: true\">\n  <div class=\"uk-modal-dialog\">\n        <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n        <div class=\"uk-modal-header\">\n            <h2 class=\"uk-modal-title\">Añadir un nuevo ordenador</h2>\n        </div>\n        <div class=\"uk-modal-body\">\n             <form class=\"ui form\">\n                <div class=\"required field\">\n                  <label>Dirección IP</label>\n                  <input type=\"text\" #ip placeholder=\"Dirección IP...\">\n                </div>\n            </form>\n        </div>\n        <div class=\"uk-modal-footer uk-text-right\">\n            <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancelar</button>\n            <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\" (click)=\"nuevoOrdenadorNoDestructivo(ip.value)\">Añadir</button>\n        </div>\n    </div>\n</div>\n\n<!-- Empresas -->\n<div class=\"scroll\" style=\"padding-top: 20px;\">\n  <div>\n    <h2 class=\"ui center aligned icon header\">\n      <i class=\"desktop icon\"></i>\n      Listado de ordenadores\n    </h2>\n    <table class=\"uk-table uk-table-middle uk-table-divider uk-table-hover\">\n    <thead>\n        <tr>\n            <th class=\"uk-table-expand\">Dirección IP</th>\n            <th class=\"uk-width-small\">Copias realizadas</th>\n            <th class=\"uk-width-small\"></th>\n            <th class=\"uk-width-small\">Estado</th>\n            <th class=\"uk-width-small\">Administrar</th>\n            <th class=\"uk-width-small\">Eliminar </th>\n        </tr>\n    </thead>\n    <tbody *ngFor=\"let item of ordenadores | async; let i = index\" data-index=\"i\">\n        <tr>\n            <td>{{ item.$value }}</td>\n            <td> {{ numCopias(item.$key) }} </td>\n            <td style=\"width: 200px;\">\n                <div>\n                     <button  *ngIf=\"obtenerEstado(item.$key) == 'Error'\" class={{cActualmente}} type=\"button\" (click)=\"actualmente(item.$key)\">{{nActualmente}}</button>\n                     <button  *ngIf=\"obtenerEstado(item.$key) == 'Warning'\" class={{cActualmente}} type=\"button\" (click)=\"actualmente(item.$key)\">{{nActualmente}}</button>\n                </div>\n            </td>\n            <td>\n                <i *ngIf=\"obtenerEstado(item.$key) == 'Error'\" i class=\"red circle icon\"></i>\n                <i *ngIf=\"obtenerEstado(item.$key) == 'Succes'\" i class=\"green circle icon\"></i>\n                <i *ngIf=\"obtenerEstado(item.$key) == 'Warning'\" i class=\"yellow circle icon\"></i>\n                <i *ngIf=\"obtenerEstado(item.$key) == 'default'\" i class=\"circle icon\"></i>\n            </td>\n            <td><button class=\"positive ui button\" (click)=\"administrar(item.$value)\">Administrar</button></td>\n            <td><button class=\"uk-button uk-button-default negative ui button\" type=\"button\" uk-toggle=\"target: #modal\" (click)=\"cualEliminar(item.$key, item.$value)\">Eliminar</button></td>\n            \n        </tr>\n    </tbody>\n</table>\n  </div>\n</div>\n</div>\n<div id=\"modal\" uk-modal=\"center: true\">\n              <div class=\"uk-modal-dialog\">\n                    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n                    <div class=\"uk-modal-header\">\n                        <h2 class=\"uk-modal-title\">¿Seguro que desea eliminar el ordenador con dirección IP: {{ pcActualIp }}?</h2>\n                    </div>\n                    <div class=\"uk-modal-body\">\n                        <p>Si le das a aceptar elimina permanentemente la dirección de este ordenador.</p>\n                    </div>\n                    <div class=\"uk-modal-footer uk-text-right\">\n                        <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancelar</button>\n                        <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\" (click)=\"borrar(pcActualLlave)\">Sí, eliminar</button>\n                    </div>\n                </div>\n            </div>"

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <a routerLink=\"/login\" id=\"goback\">Go back</a>\n\n  <h2>Crear cuenta</h2>\n\n  <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\n    \n  <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n\n    <input type=\"text\" placeholder=\"Email address..\" (ngModel)=\"email\" name=\"email\" class=\"txt\" required>\n    <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" class=\"txt\" required>\n\n    <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Crear cuenta</button>\n  </form>\n</div>"

/***/ })

},[1189]);
//# sourceMappingURL=main.bundle.js.map