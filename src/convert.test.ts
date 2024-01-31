import toBahtText, { toBahtTextEnglish } from ".";

test("Convert to English", () => {
  expect(toBahtTextEnglish(0)).toBe("Zero Baht Only");
  expect(toBahtTextEnglish(1)).toBe("One Baht Only");
  expect(toBahtTextEnglish(2)).toBe("Two Baht Only");
  expect(toBahtTextEnglish(10)).toBe("Ten Baht Only");
  expect(toBahtTextEnglish(999)).toBe("Nine Hundred Ninety Nine Baht Only");
  expect(toBahtTextEnglish(1000)).toBe("One Thousand Baht Only");

  expect(toBahtTextEnglish(1000000)).toBe("One Million Baht Only");
  expect(toBahtTextEnglish(1000000000)).toBe("One Billion Baht Only");
  expect(toBahtTextEnglish(1000000000000)).toBe("One Trillion Baht Only");
  expect(toBahtTextEnglish(1000000000000.99)).toBe("One Trillion Baht And Ninety Nine Satang");

  expect(toBahtTextEnglish(0.01)).toBe("Zero Baht And One Satang");
  expect(toBahtTextEnglish(0.02)).toBe("Zero Baht And Two Satang");
  expect(toBahtTextEnglish(500.56)).toBe("Five Hundred Baht And Fifty Six Satang");
  expect(toBahtTextEnglish(500.123)).toBe("Five Hundred Baht And Twelve Satang");
  expect(toBahtTextEnglish(500.129)).toBe("Five Hundred Baht And Thirteen Satang");

  expect(toBahtText(0, "en")).toBe("Zero Baht Only");
});

test("Convert to Thai", () => {
  expect(toBahtText(0)).toBe("ศูนย์บาทถ้วน");
  expect(toBahtText(1)).toBe("หนึ่งบาทถ้วน");
  expect(toBahtText(2)).toBe("สองบาทถ้วน");
  expect(toBahtText(10)).toBe("สิบบาทถ้วน");
  expect(toBahtText(999)).toBe("เก้าร้อยเก้าสิบเก้าบาทถ้วน");
  expect(toBahtText(1000)).toBe("หนึ่งพันบาทถ้วน");

  expect(toBahtText(1000000)).toBe("หนึ่งล้านบาทถ้วน");
  expect(toBahtText(1000000000)).toBe("หนึ่งพันล้านบาทถ้วน");
  expect(toBahtText(1000000000000)).toBe("หนึ่งล้านล้านบาทถ้วน");
  expect(toBahtText(1000000000000.99)).toBe("หนึ่งล้านล้านบาทเก้าสิบเก้าสตางค์");

  expect(toBahtText(0.01)).toBe("หนึ่งสตางค์");
  expect(toBahtText(0.02)).toBe("สองสตางค์");
  expect(toBahtText(500.56)).toBe("ห้าร้อยบาทห้าสิบหกสตางค์");
  expect(toBahtText(500.123)).toBe("ห้าร้อยบาทสิบสองสตางค์");
  expect(toBahtText(500.129)).toBe("ห้าร้อยบาทสิบสามสตางค์");

  expect(toBahtText(0, "th")).toBe("ศูนย์บาทถ้วน");
  expect(toBahtText(1000)).toBe("หนึ่งพันบาทถ้วน"); // default to Thai
});
