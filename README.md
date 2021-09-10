# TNRIB (Vérificateur de RIB Tunisie)

[![](https://data.jsdelivr.com/v1/package/npm/@mczentechnologies/tnrib/badge)](https://www.jsdelivr.com/package/npm/@mczentechnologies/tnrib)

Le RIB (Relevé d'indentité bancaire) est un numéro qui identifie d'une manière unique un compte bancaire en Tunisie.
Le relevé d'indentité bancaire tunisien est constitué d'une série de 20 chiffres.

## Usage dans le navigateur

```html
<script src="https://cdn.jsdelivr.net/npm/@mczentechnologies/tnrib"></script>
<script>
	new TNRIB('07040005810111129653').isValid(); // true
	new TNRIB('07040005810111129653').iban(); // 'TN59 07 040 0058101111296 53'
	new TNRIB('07040005810111129653').bic(); // 'CFCTTNTT'
	new TNRIB('07040005810111129653').acompteNumber(); // '0058101111296'
	new TNRIB('07040005810111129653').bankName(); // 'AMEN'
</script>