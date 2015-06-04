var React = require('react');
var Scroller = require('../index');
var util = require('dom-find');

var exampleComponent = React.createClass({
  displayName: 'exampleComponent',

  handleClick: function() {
    var relativeEl = util.findPosRelativeToViewport(document.getElementById("SecondDiv"));
    var el = util.findPos(document.getElementById("SecondDiv"));
    Scroller(el[1], 1, 'bouncePast');
  },

  render: function() {
    return <div>
      <p>LoremSystema dolphin human artisanal carbon girl Legba Kowloon. Dome boat bomb motion drone stimulate nodal point. Wonton soup media rebar augmented reality youtube DIY urban dissident engine cartel range-rover. Cyber-lights vinyl 8-bit savant military-grade receding dome human spook. Soul-delay singularity ablative pre-beef noodles grenade office franchise. Vehicle corporation fluidity apophenia decay garage dome Chiba drugs plastic spook crypto-3D-printed faded claymore mine car. </p>
      <p id="SecondDiv">Destination Div Assault artisanal paranoid nodal point geodesic military-grade RAF. Tiger-team numinous realism neon digital Kowloon DIY motion smart-papier-mache augmented reality. Convenience store table military-grade San Francisco franchise Tokyo assassin cyber-weathered bomb receding. Cartel narrative disposable table refrigerator voodoo god spook warehouse vinyl otaku sub-orbital pre-bicycle. Plastic lights tube drugs media papier-mache j-pop urban pre-military-grade narrative gang. </p>
      <p>J-pop rebar bridge crypto-vinyl otaku saturation point engine grenade. Math-DIY jeans refrigerator network futurity neon. Cartel office semiotics math-media disposable weathered car. </p>
      <p>Wonton soup city concrete singularity courier long-chain hydrocarbons boy ablative marketing modem market. Motion monofilament construct weathered bridge Legba assassin Kowloon youtube math-narrative order-flow dome corporation. DIY plastic realism into table Shibuya garage tube stimulate lights towards network chrome digital range-rover dead.-space sunglasses order-flow franchise 3D-printed assassin stimulate ablative. Semiotics pistol media rain paranoid papier-mache franchise weathered man corrupted systemic decay urban carbon kanji computer. Tower camera shrine pre-motion euro-pop semiotics Tokyo lights sensory weathered BASE jump. Tank-traps chrome ablative paranoid BASE jump tower marketing. Franchise physical footage car hacker-space tower. </p>
      <p>Rifle tiger-team motion augmented reality warehouse otaku Tokyo. Otaku face forwards monofilament systemic chrome bridge sentient. Human film assassin neural vehicle neon sensory beef noodles denim shanty town girl apophenia dome pen realism BASE jump assault. Shibuya decay rain rifle rebar dome office film media nodal point-space Legba fluidity euro-pop papier-mache. Network uplink nano-media tanto face forwards katana cardboard voodoo god savant shrine Kowloon Chiba tattoo realism. Table render-farm into car drugs girl concrete corrupted franchise tanto tank-traps disposable dead motion engine. Office wristwatch tube dissident geodesic face forwards post-weathered film table kanji into chrome physical otaku media towards. Lights drugs gang cardboard man rain chrome tanto. </p>
      <p>Shoes otaku neural savant weathered rebar chrome towards smart-tank-traps monofilament network nano-office. Rebar-ware tube lights table camera crypto-render-farm katana. BASE jump military-grade footage lights media refrigerator convenience store courier uplink tanto wristwatch vehicle long-chain hydrocarbons augmented reality. Uplink tower pre-Chiba crypto-sentient refrigerator fluidity DIY ablative. Woman plastic smart-marketing apophenia market systema boy alcohol concrete gang spook Legba realism military-grade silent kanji. Woman bomb euro-pop faded jeans Kowloon crypto-numinous long-chain hydrocarbons man cartel camera sprawl film Shibuya disposable. Cyber-camera tiger-team voodoo god rebar hotdog pre-gang j-pop neon numinous. Plastic sign wristwatch boat fluidity courier euro-pop table corrupted rebar grenade. </p>
      <p><a onClick={this.handleClick}>Click on me to go to second paragraph</a></p>
    </div>;
  }
});

module.exports = exampleComponent;