﻿#pragma strict

// the DebugPanel Object serves as a provisory main menu launcher and hub for test elements
var debug_panel:GameObject;
var start_button:GameObject;
var exit_button:GameObject;
var launch_enemy_attack:GameObject;
var game_over_button:GameObject;

private var enemy_attack:EnemyAttack; 
private var game_over:GameOver;

function Start(){
	enemy_attack = GetComponent(EnemyAttack);
	game_over = GetComponent(GameOver);
	
	debug_panel.SetActive(true);
	
	// ACTION LISTENERS
	start_button.GetComponent(UI.Button).onClick.AddListener(function(){Game.SetState("menu");debug_panel.SetActive(false);});
	exit_button.GetComponent(UI.Button).onClick.AddListener(Game.Exit);
	launch_enemy_attack.GetComponent(UI.Button).onClick.AddListener(enemy_attack.Init); 
	game_over_button.GetComponent(UI.Button).onClick.AddListener(function(){Game.SetState("game_over");});
}

function Update () {
	Helper.Toggle(debug_panel);
}

