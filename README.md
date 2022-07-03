# TNRIB (Vérificateur de RIB Tunisie)

[![](https://data.jsdelivr.com/v1/package/npm/@mczentechnologies/tnrib/badge)](https://www.jsdelivr.com/package/npm/@mczentechnologies/tnrib) [![GitHub license](https://img.shields.io/github/license/McZen-Technologies/TNRIB?style=flat-square)](https://github.com/McZen-Technologies/TNRIB/blob/main/LICENSE)

Le RIB (Relevé d'identité bancaire) est un numéro qui identifie d'une manière unique un compte bancaire en Tunisie.
Le relevé d'identité bancaire tunisien est constitué d'une série de 20 chiffres.

Voir la démo sur [trovit.tn](https://trovit.tn/rib)

---

The BBAN (Basic Bank Account Number) or is a number that uniquely identifies a bank account. The Tunisian BBAN is made up of a series of 20 digits.

See the demo on [trovit.tn](https://trovit.tn/rib)


## Usage dans le navigateur

```html
<script src="https://cdn.jsdelivr.net/npm/@mczentechnologies/tnrib"></script>
<script>
	console.log(new TNRIB('07040005810111129653').isValid());
	// expected output: true
	console.log(new TNRIB('07040005810111129653').iban());
	// expected output: 'TN59 07 040 0058101111296 53'
	console.log(new TNRIB('07040005810111129653').bic());
	// expected output:  'CFCTTNTT'
	console.log(new TNRIB('07040005810111129653').acompteNumber());
	// expected output:  '0058101111296'
	console.log(new TNRIB('07040005810111129653').bankName());
	// expected output:  'AMEN'
	console.log(new TNRIB('07040005810111129653'))
	// expected output: 
	/*{
	  "value": "07040005810111129653",
	  "valid": true,
	  "iban": "TN59 07 040 0058101111296 53",
	  "bic": "CFCTTNTT",
	  "acompteNumber": "0058101111296",
	  "bankName": "AMEN"
	}*/
</script>
