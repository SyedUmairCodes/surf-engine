import { Switch, Route, Redirect } from "react-router-dom";
import { Result } from "../Result/Result";

export const SearchResult = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path={["/search", "/images", "/news", "/videos"]}>
          <Result />
        </Route>
      </Switch>
    </div>
  );
};
