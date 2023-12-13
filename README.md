# TNRIB (Vérificateur de RIB Tunisie)

[![](https://data.jsdelivr.com/v1/package/gh/mczen-technologies/tnrib/badge)](https://www.jsdelivr.com/package/gh/mczen-technologies/tnrib) [![GitHub license](https://img.shields.io/github/license/McZen-Technologies/TNRIB?style=flat-square)](https://github.com/McZen-Technologies/TNRIB/blob/main/LICENSE)

Le RIB (Relevé d'identité bancaire) est un numéro qui identifie d'une manière unique un compte bancaire en Tunisie.
Le relevé d'identité bancaire tunisien est constitué d'une série de 20 chiffres.

Voir la démo sur [trovit.tn](https://trovit.tn)

---

The BBAN (Basic Bank Account Number) or is a number that uniquely identifies a bank account. The Tunisian BBAN is made up of a series of 20 digits.

See the demo on [trovit.tn](https://trovit.tn)

### Installation

```html
<script src="https://cdn.jsdelivr.net/gh/mczen-technologies/tnrib@latest/tnrib.min.js"></script>
```

### Usage dans le navigateur

```js
console.log(new TNRIB('07040005810111129653').isValid());
// expected output: true
```

```js
console.log(new TNRIB('07040005810111129653').iban());
// expected output: 'TN59 07 040 0058101111296 53'
```

```js
console.log(new TNRIB('07040005810111129653').bic());
// expected output:  'CFCTTNTT'
```

```js
console.log(new TNRIB('07040005810111129653').accountNumber());
// expected output:  '0058101111296'	
```	
	
```js	
console.log(new TNRIB('07040005810111129653').bankName());	
// expected output:  'AMEN'	
```	

```js
console.log(new TNRIB('07040005810111129653'))
// expected output: 
/*{
	"value": "07040005810111129653",
	"valid": true,
	"iban": "TN59 07 040 0058101111296 53",
	"bic": "CFCTTNTT",
	"accountNumber": "0058101111296",
	"bankName": "AMEN"
  }*/
```	
