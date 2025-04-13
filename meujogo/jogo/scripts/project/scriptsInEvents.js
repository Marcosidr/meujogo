

const scriptsInEvents = {

	async Fimdejogo_Event1_Act1(runtime, localVars)
	{
		window.open("https://github.com/Marcosidr", "_blank");
		
	},

	async Fimdejogo_Event2_Act1(runtime, localVars)
	{
		window.open("https://instagram.com/marcos_inacion", "_blank");
		
	},

	async Fimdejogo_Event3_Act1(runtime, localVars)
	{
		window.open("https://facebook.com", "_blank");
		
	},

	async Fimdejogo_Event5_Act1(runtime, localVars)
	{
		let inst = runtime.objects["marquin"].getFirstInstance();
		if (inst.opacity < 1) {
		    inst.opacity += 0.1;
		}
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
