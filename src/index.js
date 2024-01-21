import React from "react";
import ReactDOM from "react-dom/client";
import TextExpander from "./TextExpander";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TextExpander defaultNumText={20}>
      From fairest creatures we desire increase, That thereby beauty’s rose
      might never die, But as the riper should by time decrease, His tender heir
      mught bear his memeory: But thou, contracted to thine own bright eyes,
      Feed’st thy light’st flame with self-substantial fuel, Making a famine
      where abundance lies, Thyself thy foe, to thy sweet self too cruel.
    </TextExpander>
    <TextExpander
      defaultNumText={30}
      color="#9a3412"
      background="#fed7aa"
      size={18}
      className="text-box"
      showTextBtn="Show text"
      closeTextBtn="Collapse text"
      fontFamily="Inter"
    >
      Love is patient, love is kind; love is not jealous or boastful; it is not
      arrogant or rude. Love does not insist on its own way; it is not irritable
      or resentful; it does not rejoice at wrong, but rejoices in the right.
      Love bears all things, believes all things, hopes all things, endures all
      things. Love never ends.
    </TextExpander>
    <TextExpander defaultOpen={true}>
      If thy soul check thee that I come so near, Swear to thy blind soul that I
      was thy Will, And will, thy soul knows, is admitted there; Thus far for
      love, my love-suit, sweet, fulfil. Will, will fulfil the treasure of thy
      love, Ay, fill it full with wills, and my will one. In things of great
      receipt with ease we prove Among a number one is reckoned none: Then in
      the number let me pass untold, Though in thy store’s account I one must
      be; For nothing hold me, so it please thee hold That nothing me, a
      something sweet to thee: Make but my name thy love, and love that still,
      And then thou lovest me for my name is ‘Will’.
    </TextExpander>
  </React.StrictMode>
);
