const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Anchor,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Plugins.Mouse,
		C3.Behaviors.LOS,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Bullet,
		C3.Plugins.Audio,
		C3.Plugins.Json,
		C3.Plugins.NodeWebkit,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnRelease,
		C3.Plugins.Mouse.Cnds.IsButtonDown,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Plugins.Audio.Acts.Play,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Cnds.OnLayoutEnd,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Behaviors.LOS.Cnds.HasLOSToObject,
		C3.ScriptsInEvents.Fimdejogo_Event1_Act1,
		C3.ScriptsInEvents.Fimdejogo_Event2_Act1,
		C3.ScriptsInEvents.Fimdejogo_Event3_Act1,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.ScriptsInEvents.Fimdejogo_Event5_Act1
	];
};
self.C3_JsPropNameTable = [
	{Âncora: 0},
	{fundo: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{andar: 0},
	{correr: 0},
	{Personagem: 0},
	{Teclado: 0},
	{Sólido: 0},
	{solo: 0},
	{Montanha: 0},
	{Nuvem: 0},
	{N2: 0},
	{Mouse: 0},
	{vida: 0},
	{açao: 0},
	{Plataforma: 0},
	{Monstro01: 0},
	{Arvore: 0},
	{Rampa: 0},
	{obstaculo: 0},
	{fonte: 0},
	{arvore2: 0},
	{obstaculo2: 0},
	{fogo: 0},
	{fogo2: 0},
	{fogo3: 0},
	{proximoNivel: 0},
	{obstaculo3: 0},
	{Obstaculo4: 0},
	{gamerOver: 0},
	{logo: 0},
	{telaInicio: 0},
	{jogar: 0},
	{fase: 0},
	{solo2: 0},
	{Sprite: 0},
	{obstacuo04: 0},
	{ação: 0},
	{CampoDeVisão: 0},
	{Sprite2: 0},
	{morre: 0},
	{FonteDeSprites: 0},
	{FonteDeSprites2: 0},
	{Sprite3: 0},
	{yes: 0},
	{no: 0},
	{finaldojogo: 0},
	{coliosao: 0},
	{Projétil: 0},
	{Sprite4: 0},
	{PlanoDeFundoEmBlocos: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{Áudio: 0},
	{chef: 0},
	{github: 0},
	{instagram: 0},
	{facebook: 0},
	{JSON: 0},
	{NWjs: 0},
	{Texto: 0},
	{marquin: 0},
	{VidasMonstro: 0},
	{Vida: 0},
	{pontos: 0},
	{VidasMonstro2: 0},
	{Vida2: 0},
	{pontos2: 0}
];

self.InstanceType = {
	fundo: class extends self.ITiledBackgroundInstance {},
	Personagem: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	solo: class extends self.ISpriteInstance {},
	Montanha: class extends self.ISpriteInstance {},
	Nuvem: class extends self.ISpriteInstance {},
	N2: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Monstro01: class extends self.ISpriteInstance {},
	Arvore: class extends self.ISpriteInstance {},
	Rampa: class extends self.ISpriteInstance {},
	obstaculo: class extends self.ISpriteInstance {},
	fonte: class extends self.ISpriteInstance {},
	arvore2: class extends self.ISpriteInstance {},
	obstaculo2: class extends self.ISpriteInstance {},
	fogo: class extends self.ISpriteInstance {},
	fogo2: class extends self.ISpriteInstance {},
	fogo3: class extends self.ISpriteInstance {},
	proximoNivel: class extends self.ISpriteInstance {},
	obstaculo3: class extends self.ISpriteInstance {},
	Obstaculo4: class extends self.ISpriteInstance {},
	vida: class extends self.ISpriteInstance {},
	gamerOver: class extends self.ITiledBackgroundInstance {},
	logo: class extends self.ISpriteInstance {},
	telaInicio: class extends self.ITiledBackgroundInstance {},
	jogar: class extends self.ISpriteInstance {},
	fase: class extends self.ITiledBackgroundInstance {},
	solo2: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	obstacuo04: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	morre: class extends self.ISpriteInstance {},
	FonteDeSprites: class extends self.ISpriteFontInstance {},
	FonteDeSprites2: class extends self.ISpriteFontInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	yes: class extends self.ISpriteInstance {},
	no: class extends self.ISpriteInstance {},
	finaldojogo: class extends self.ISpriteInstance {},
	coliosao: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	Áudio: class extends self.IInstance {},
	chef: class extends self.ISpriteInstance {},
	github: class extends self.ISpriteInstance {},
	instagram: class extends self.ISpriteInstance {},
	facebook: class extends self.ISpriteInstance {},
	JSON: class extends self.IJSONInstance {},
	NWjs: class extends self.IInstance {},
	Texto: class extends self.ITextInstance {},
	marquin: class extends self.ISpriteInstance {}
}