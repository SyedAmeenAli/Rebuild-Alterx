import "./ReceiptCard.css";

export function ReceiptCard() {
  return (
    <div className="receipt-card">
      <div className="receipt-card__bg" aria-hidden="true" />
      <div className="receipt-card__content">
        <p className="receipt-card__header">AXINVENTORY</p>
        <p className="receipt-card__sub">Store 01 · Counter</p>
        <hr className="receipt-card__divider" />
        <div className="receipt-card__row">
          <span>Men&apos;s Overshirt</span>
          <span>x1</span>
        </div>
        <div className="receipt-card__row">
          <span>Variant</span>
          <span>Olive / M</span>
        </div>
        <div className="receipt-card__row">
          <span>SKU</span>
          <span>AX-OS-OLV-M</span>
        </div>
        <div className="receipt-card__total">
          <span>Total</span>
          <span>&#8377;2,499</span>
        </div>
        <div className="receipt-card__barcode" aria-hidden="true" />
        <p className="receipt-card__barcode-id">AX-OS-OLV-M</p>
      </div>
    </div>
  );
}
