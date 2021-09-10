# TNRIB (Vérificateur de RIB Tunisie)

Le RIB (Relevé d'indentité bancaire) est un numéro qui identifie d'une manière unique un compte bancaire en Tunisie.
Le relevé d'indentité bancaire tunisien est constitué d'une série de 20 chiffres.

## Usage dans le navigateur

```html
<script src="tnrib.js"></script>
<script>
	new TNRIB('07040005810111129653').isValid(); // true
	new TNRIB('07040005810111129653').iban(); // 'TN59 07 040 0058101111296 53'
	new TNRIB('07040005810111129653').bic(); // 'CFCTTNTT'
	new TNRIB('07040005810111129653').acompteNumber(); // '0058101111296'
	new TNRIB('07040005810111129653').bankName(); // 'AMEN'
</script>