class TNRIB {
	
	static data = [
		{ code: '01', name: 'ATB', bic : 'ATBK' },
		{ code: '02', name: 'BFT', bic : 'BFTN' },
		{ code: '03', name: 'BNA', bic : 'BNTE' },
		{ code: '04', name: 'ATTIJARI', bic : 'BSTU' },
		{ code: '05', name: 'BT', bic : 'BTBK' },
		{ code: '07', name: 'AMEN', bic : 'CFCT' },
		{ code: '08', name: 'BIAT', bic : 'BIAT' },
		{ code: '10', name: 'STB', bic : 'STBK' },
		{ code: '11', name: 'UBCI', bic : 'UBCI' },
		{ code: '12', name: 'UIB', bic : 'UIBK' },
		{ code: '14', name: 'BH', bic : 'BHBK' },
		{ code: '16', name: 'CITI', bic : 'CITI' },
		{ code: '17', name: 'POSTE', bic : 'LPTN' },
		{ code: '20', name: 'BTK', bic : 'BTKO' },
		{ code: '21', name: 'TSB', bic : 'TSIB' },
		{ code: '23', name: 'QNB', bic : 'BTQI' },
		{ code: '24', name: 'BTE', bic : 'BTEX' },
		{ code: '25', name: 'ZITOUNA', bic : 'BZIT' },
		{ code: '26', name: 'BTL', bic : 'ATLD' },
		{ code: '28', name: 'َََABC', bic : 'ABCO' },
		{ code: '29', name: 'َََBFPME', bic : 'BFPM' },
		{ code: '32', name: 'ََALBARAKA', bic : 'BEIT' },
		{ code: '47', name: 'ََWIFAK', bic : 'WKIB' }
	]	
	
	constructor(value) {
		this.value = value
	}
	
	isValid() {
		const regex = new RegExp('[0-9]{20}');
		if(regex.test(this.value)){
			const tn_bank = TNRIB.data.find(element => element.code == this.value.substring(0,2))
			if(tn_bank != undefined){
				const cle = 97 - Number(BigInt(this.value.substring(0,18)+'00') % 97n)
				if(Number(this.value.slice(-2)) === cle){
					return true
				}else{
					return false
				}
			}else{
				return false
			}
		}else{
			return false
		}
	}
	
	iban() {
		if(this.isValid()) return `TN59 ${this.value.substring(0,2)} ${this.value.substring(2,5)} ${this.value.substring(5,18)} ${this.value.substring(18,20)}`
		else return undefined
	}
	
	bic(){
		if(this.isValid()) return `${TNRIB.data.find(element => element.code == this.value.substring(0,2)).bic}TNTT`
		else return undefined
	}
	
	acompteNumber() {
		if(this.isValid()) return this.value.substring(5,18)
		else return undefined
	}
	
	bankName() {
		if(this.isValid()) return TNRIB.data.find(element => element.code == this.value.substring(0,2)).name
		else return undefined
	}
}