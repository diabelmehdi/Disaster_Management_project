import React from "react";
import "./Style.css";
import Card2 from "src/Component/UI/Card2";
import Grid from "@material-ui/core/Grid";

const Supplies = (props) => {
  return (
    <Card2>
      <div className="supl">
        This represents a list that you can fill all, or part of, depending on
        your needs and requirements. Print the list and put a check-mark next to
        each item as you store it away. Don't try to fill this in a few weeks,
        but just try to get 1 item at least per week, store it away, and then go
        on to next. Some of the items are common sense, things that you should
        have in your house anyway in case of emergency or need. Others are more
        "hard-core" and you may opt not to purchase it - in that case, line
        through the item :
      </div>

      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <div className="h1">MEDICAL SUPPLIES</div>
          <ul className="a">
            <li>Hydrogen Peroxide</li>
            <li>Multi-vitamins/Aminos/Vitamin C</li>
            <li>Stitching Kit (for serious cuts)</li>
            <li>First Aid Kit</li>
            <li>Penicillin if available</li>
            <li>Snake Bite Kit Pain</li>
            <li>Killer (Tylenol, Advil etc</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className="h1">CLOTHING SUPPLIES</div>
          <ul className="a">
            <li>Fatigues</li>
            <li>Hiking Boots</li>
            <li>Rain Gear</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className="h1">SURVIVAL KITS</div>
          <ul className="a">
            <li>Air Compressor / DC power source</li>
            <li>Backpacks</li>
            <li>Battery Charger</li>
            <li>CB Radio</li>
            <li>Elecrical Wire</li>
            <li>Maps</li>
            <li>Tent & sleeping bag(s)</li>
            <li>Campstove / Fuel</li>
            <li>Fishing Gear</li>
            <li>Rope and Seeds - All kinds</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className="h1">HOUSEHOLD ITEMS</div>
          <ul className="a">
            <li>Baking Soda</li>
            <li>Candles</li>
            <li>Knives</li>
            <li>Lighter Fluid</li>
            <li>Scissors</li>
            <li>Feminine Pads</li>
            <li>Notebooks</li>
          </ul>
        </Grid>
      </Grid>
    </Card2>
  );
};

export default Supplies;
