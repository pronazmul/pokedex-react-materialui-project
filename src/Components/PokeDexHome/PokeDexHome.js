import { Grid } from "@material-ui/core";
import PokemonAppbar from "./PokemonAppbar";

const PokeDexHome = (props) => {
  return (
    <Grid container>
      {/* Main Header */}
      <Grid item xs={12}>
        <PokemonAppbar />
      </Grid>
      {/* Main Card Component */}
      <Grid item container>
        <Grid item xs={false} sm={2}></Grid>
        <Grid item container xs={12} sm={8}>
          {" "}
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default PokeDexHome;
