import {
  base,
  bold,
  boldItalic,
  box,
  boxFilled,
  circle,
  cursive,
  cursiveBold,
  goth,
  gothBold,
  italic,
  slashSymbol,
  stemOutline,
  strike,
  subscript,
  superscript,
  typewriter,
  wide,
} from "./glyphs";

const glyphMap = {};

base.forEach((char, i) => {
  glyphMap[char] = {
    Bold: bold[i],
    "Bold Italic": boldItalic[i],
    Box: box[i],
    "Box Filled": boxFilled[i],
    Circle: circle[i],
    Cursive: cursive[i],
    "Cursive Bold": cursiveBold[i],
    Goth: goth[i],
    "Goth Bold": gothBold[i],
    Italic: italic[i],
    Slash: slashSymbol[i],
    Stem: stemOutline[i],
    Strike: strike[i],
    Subscript: subscript[i],
    Superscript: superscript[i],
    Typewriter: typewriter[i],
    Wide: wide[i],
  };
});

export const validGlyphs = base;

const turnText = (chars, style) =>
  chars.map((c) => (validGlyphs.includes(c) ? glyphMap[c][style] : c)).join("");

export const mapInput = (text) => {
  const chars = text.split("");

  const ret = {
    Italic: turnText(chars, "Italic"),
    Bold: turnText(chars, "Bold"),
    "Bold Italic": turnText(chars, "Bold Italic"),
    "Alternating Case One": chars
      .map((c, i) => (i % 2 === 0 ? c : c.toUpperCase()))
      .join(""),
    "Alternating Case Two": chars
      .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c))
      .join(""),
    Box: turnText(chars, "Box"),
    "Box Filled": turnText(chars, "Box Filled"),
    Circle: turnText(chars, "Circle"),
    Cursive: turnText(chars, "Cursive"),
    "Cursive Bold": turnText(chars, "Cursive Bold"),
    Goth: turnText(chars, "Goth"),
    "Goth Bold": turnText(chars, "Goth Bold"),
    Slash: turnText(chars, "Slash"),
    Stem: turnText(chars, "Stem"),
    Strike: turnText(chars, "Strike"),
    Subscript: turnText(chars, "Subscript"),
    Superscript: turnText(chars, "Superscript"),
    Typewriter: turnText(chars, "Typewriter"),
    Wide: turnText(chars, "Wide"),
  };

  return ret;
};
