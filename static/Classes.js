class PLAYER {
  constructor({      
    id,
    postion,
    top,
    left,
    width_value,
    height_value,
    original_size,
    scale,
    Idle_Animation,
    Attack_Animation,
    attack_length,
    Hurt_Animation,
    hurt_length,      
    Special_Animation,
    special_length,
    Run_Animation,
    Portrait,
    Death_Animation
  }) {
    this.image = new Image()
    this.Idle_Animation = Idle_Animation
    this.image.src = this.Idle_Animation
    this.image.id = id
    this.image.style.position = postion      
    this.top = top
    this.left = left
    this.image.style.top = top
    this.image.style.left = left
    this.image.style.objectFit = "cover"
    this.original_size = original_size
    this.scale = scale
    this.image.height = this.scale *this.original_size
    this.image.width = this.scale * this.original_size

    this.width_value = width_value
    this.height_value = height_value
    this.Attack_Animation = Attack_Animation
    this.attack_length = attack_length
    this.Hurt_Animation = Hurt_Animation
    this.hurt_length = hurt_length
    this.Special_Animation = Special_Animation
    this.special_length = special_length
    this.Run_Animation = Run_Animation
    this.Portrait = Portrait
    this.Death_Animation = Death_Animation
  }
  
  init() {
    var src = document.getElementById("body");
    src.append(this.image);
    this.Resize();
    this.hide();
  }

  show() {
    document.getElementById(this.image.id).hidden = false;
  }

  hide() {
    document.getElementById(this.image.id).hidden = true;
  }
  
  Idle(){
    this.image.src = this.Idle_Animation;
  }

  Run(){
    this.image.src = this.Run_Animation;
    //delay(this.attack_length).then(() => this.Idle());
    //this.image.src = this.Run_Animation
  }

  Attack(){
    this.image.src = this.Attack_Animation;
    delay(this.attack_length).then(() => this.Idle());
  }

  Hurt(){
    this.image.src = this.Hurt_Animation;
    delay(this.hurt_length).then(() => this.Idle());
  }

  Special(){
    this.image.src = this.Special_Animation;
    delay(this.special_length).then(() => this.Idle());
  }

  SetPlayerName(Name){
    document.getElementById("PlayerName").textContent = Name
  }

  Highlight(){
    document.getElementById("CharacterToolbar").hidden = false;
    document.getElementById("Portrait").src = this.Portrait
    //document.getElementById("PlayerName").textContent = this.image.id
  }

  RemoveHighlight(){
    document.getElementById("CharacterToolbar").hidden = true;
  }

  UpdateScore(){
    document.getElementById("Score").textContent = "ÖSSZPONTSZÁM: " + eval(this.image.id + "Score")
    document.getElementById("CurrentRoll").textContent = "AKTUÁLIS DOBÁS: " + eval(this.image.id + "CurrentRoll")
  }
  Resize(){

    let new_width_num = ((this.width_value / 100) * window.innerWidth) * this.scale
    let new_width_text = new_width_num.toString()
    this.image.style.width = new_width_text + "px"

    let new_height_num = ((this.height_value / 100) * window.innerHeight) * this.scale
    let new_height_text = new_height_num.toString()
    this.image.style.height = new_height_text + "px"
    
  }
  Death(){
    this.image.src = this.Death_Animation;
  }
  
  remove(){
    document.getElementById(this.image.id).remove()
  }

  GetAttackLength(){
    return this.attack_length
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class CURSE {
  constructor({      
    id,
    postion,
    top,
    left,
    width_value,
    height_value,
    original_size,
    scale,
    Idle_Animation
  }) {
    this.image = new Image()
    this.Idle_Animation = Idle_Animation
    this.image.src = this.Idle_Animation
    this.image.id = id
    this.image.style.position = postion      
    this.top = top
    this.left = left
    this.image.style.top = top
    this.image.style.left = left
    this.image.style.objectFit = "cover"
    this.image.style.opacity = 0.7
    this.original_size = original_size
    this.scale = scale
    this.image.height = this.scale * this.original_size
    this.image.width = this.scale * this.original_size

    this.width_value = width_value
    this.height_value = height_value
  }
  
  init() {
    var src = document.getElementById("body");
    src.append(this.image);
    this.Resize();
    this.hide();
  }

  show() {
    document.getElementById(this.image.id).hidden = false;
  }

  hide() {
    document.getElementById(this.image.id).hidden = true;
  }
  
  Idle(){
    this.image.src = this.Idle_Animation;
  }
  Resize(){

    let new_width_num = ((this.width_value / 100) * window.innerWidth) * this.scale
    let new_width_text = new_width_num.toString()
    this.image.style.width = new_width_text + "px"

    let new_height_num = ((this.height_value / 100) * window.innerHeight) * this.scale
    let new_height_text = new_height_num.toString()
    this.image.style.height = new_height_text + "px"
    
  }    
  remove(){
    document.getElementById(this.image.id).remove()
  }
}