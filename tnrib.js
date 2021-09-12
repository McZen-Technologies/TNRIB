class TNRIB {
	static data = [
		{ code: '01', name: 'ATB', bic: 'ATBK' },
		{ code: '02', name: 'BFT', bic: 'BFTN' },
		{ code: '03', name: 'BNA', bic: 'BNTE' },
		{ code: '04', name: 'ATTIJARI', bic: 'BSTU' },
		{ code: '05', name: 'BT', bic: 'BTBK' },
		{ code: '07', name: 'AMEN', bic: 'CFCT' },
		{ code: '08', name: 'BIAT', bic: 'BIAT' },
		{ code: '10', name: 'STB', bic: 'STBK' },
		{ code: '11', name: 'UBCI', bic: 'UBCI' },
		{ code: '12', name: 'UIB', bic: 'UIBK' },
		{ code: '14', name: 'BH', bic: 'BHBK' },
		{ code: '16', name: 'CITI', bic: 'CITI' },
		{ code: '17', name: 'POSTE', bic: 'LPTN' },
		{ code: '20', name: 'BTK', bic: 'BTKO' },
		{ code: '21', name: 'TSB', bic: 'TSIB' },
		{ code: '23', name: 'QNB', bic: 'BTQI' },
		{ code: '24', name: 'BTE', bic: 'BTEX' },
		{ code: '25', name: 'ZITOUNA', bic: 'BZIT' },
		{ code: '26', name: 'BTL', bic: 'ATLD' },
		{ code: '28', name: 'َََABC', bic: 'ABCO' },
		{ code: '29', name: 'َََBFPME', bic: 'BFPM' },
		{ code: '32', name: 'ََALBARAKA', bic: 'BEIT' },
		{ code: '47', name: 'ََWIFAK', bic: 'WKIB' }
	]

	constructor(value) {
		this.value = value
	}

	// NOTE: if you want to force the behave here to be private should use # or symbols.
	__getExistElementByCurrentCode() {
		return TNRIB.data.find(({ code }) => code == this.value.substring(0, 2))
	}

	isValid() {
		const regex = new RegExp('[0-9]{20}')
		return (
			regex.test(this.value) &&
			this.__getExistElementByCurrentCode() &&
			+this.value.slice(-2) === (97 - Number(BigInt(this.value.substring(0, 18) + '00') % 97n))
		)
	}

	iban() {
		return this.isValid() && `TN59 ${this.value.substring(0, 2)} ${this.value.substring(2, 5)} ${this.value.substring(5, 18)} ${this.value.substring(18, 20)}`
	}

	bic() {
		return this.isValid() && `${this.__getExistElementByCurrentCode().bic}TNTT`
	}

	acompteNumber() {
		return this.isValid() && this.value.substring(5, 18)
	}

	bankName() {
		return this.isValid() && this.__getExistElementByCurrentCode().name
	}
}
