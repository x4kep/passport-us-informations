import "./main.styles.scss";

function Main() {
  return (
    <main className="main">
      <div className="get-started-container">
        <div className="get-started-container__header">
          <h1 className="get-started-container__header-title">Get Started</h1>
        </div>
        <div className="get-started-container__content">
          <label>What is your citizenship ?</label>
          <br />
          <select name="citizenship">
            <option value="">--Please choose an option--</option>
            <option value="serbian">Serbian</option>
            <option value="german">German</option>
          </select>
          <br />

          <fieldset>
            <div>
              <input
                type="checkbox"
                id="citizenship"
                name="citizenship"
                checked
              />
              <label for="citizenship">I have more then 1 citizenship</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Select reason(s) for travel to United States</legend>

            <div>
              <input
                type="checkbox"
                id="tourism-or-visit"
                name="tourism-or-visit"
              />
              <label for="tourism-or-visit">Tourism or visit</label>
            </div>

            <div>
              <input type="checkbox" id="business" name="business" />
              <label for="horns">Business</label>
            </div>

            <div>
              <input type="checkbox" id="transit" name="transit" />
              <label for="transit">Transit</label>
            </div>

            <div>
              <input type="checkbox" id="study" name="study" />
              <label for="study">Study</label>
            </div>
          </fieldset>

          <button>Continue</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
