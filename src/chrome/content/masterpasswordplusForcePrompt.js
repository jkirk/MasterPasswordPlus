if (mapaPlus.core.status == 2 && (mapaPlus.core.pref(supress) == 2 || mapaPlus.core.pref_SuppressTemp))
{
	var b = mapaPlus.core.dialogForce, ok = false;
	mapaPlus.core.dialogForce = true;
	try
	{
		mapaPlus.core.tokenDB.login(false);
		ok = true;
	}catch(e){}
	mapaPlus.core.dialogForce = b;
	if (!ok)
	{
		let timer = Components.classes["@mozilla.org/timer;1"].createInstance(Components.interfaces.nsITimer);
		timer.init({observe:window.close}, 0, timer.TYPE_ONE_SHOT);
	}
}