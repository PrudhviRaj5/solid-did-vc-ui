import React from "react";
import clx from "classnames";
import "./Subject.scss";

export const Subject = () => {
  const [tab, setTab] = React.useState("request");

  return (
    <div className="subject-tab">
      <div className="tab">
        <button
          className={clx("tablinks", { active: tab === "request" })}
          onClick={() => setTab("request")}
        >
          Request
        </button>
        <button
          className={clx("tablinks", { active: tab === "share" })}
          onClick={() => setTab("share")}
        >
          Share
        </button>
      </div>

      {tab === "request" ? <RequestTab /> : <ShareTab />}
    </div>
  );
};

const RequestTab = () => {
  return (
    <div className="tabcontent">
      <h3>Request Verifiable Credential</h3>
      <form>
        <fieldset>
          <div>
            <label htmlFor="cred-domain">Select Credential Domain:</label>
            <select>
              <option value="">Select "General" if unsure</option>
              <option value="EDUCATION">Education</option>
              <option value="FINANCE">Finance</option>
              <option value="GENERAL">General</option>
              <option value="GOVERNMENT">Government</option>
              <option value="HEALTH">Health</option>
              <option value="LAW">Law</option>
              <option value="MEDICINE">Medicine</option>
              <option value="PROFESSION">Profession</option>
              <option value="TRANSPORTATION">Transportation</option>
              <option value="TRAVEL">Travel</option>
            </select>
          </div>
          <div>
            <label>Select Credential Title:</label>
            <input
              type="text"
              placeholder="e.g., MEng. Degree Application for Kayode Ezike"
              style={{ width: "50%" }}
            />
            <br></br>
          </div>
          <div>
            <label>Provide Credential Issuer ID:</label>
            <input
              type="text"
              placeholder="e.g., https://ISSUER.solid.community/profile/card#me"
              style={{ width: "46%" }}
            />
            <br></br>
          </div>
          <h4>Optional Credential Description</h4>
          <textarea
            rows={15}
            cols={100}
            form="vcform"
            placeholder="Use this area to provide additional information, request clarification, or make any other miscellaneous inquiry"
          ></textarea>
          <input type="submit" value="Request Credential" />
        </fieldset>
      </form>
    </div>
  );
};

const ShareTab = () => {
  return (
    <div className="tabcontent">
      <h3>Share Credential</h3>
      <form>
        <fieldset>
          <input type="radio" name="share" value="upload" checked />
          Share From Computer
          <br />
          <input type="radio" name="share" value="uri" />
          Share From URI
          <br />
          <div id="share-cred-upload-cnt">
            <label>Upload Credential:</label>
            <input type="file" required />
            <br />
          </div>
          <div className="hidden">
            <label>Provide Credential URI:</label>
            <input
              type="text"
              placeholder="e.g., https://SUBJECT.solid.community/inbox/cred-4.n3"
              size={50}
            />
            <br />
          </div>
          <div>
            <label>Provide Verifier ID:</label>
            <input
              type="text"
              placeholder="e.g., https://VERIFIER.solid.community/profile/card#me"
              size={50}
            />
            <br />
          </div>
          <input
            type="submit"
            value="Share Credential"
            style={{float: "right"}}
          />
        </fieldset>
      </form>
    </div>
  );
};
