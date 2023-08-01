import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type NioWalletContainerType = {
  walletBalance?: string;
  walletBalanceNio?: string;
  walletBalanceEth?: string;
  walletTransactionIdNio?: string;

  /** Style props */
  propLetterSpacing?: Property.LetterSpacing;
  propLetterSpacing1?: Property.LetterSpacing;
  propWidth?: Property.Width;
};

const NioWalletContainer: FunctionComponent<NioWalletContainerType> = ({
  walletBalance,
  walletBalanceNio,
  walletBalanceEth,
  walletTransactionIdNio,
  propLetterSpacing,
  propLetterSpacing1,
  propWidth,
}) => {
  const divStyle: CSS.Properties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
    };
  }, [propLetterSpacing]);

  const nIOStyle: CSS.Properties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing1,
    };
  }, [propLetterSpacing1]);

  const bitcoinIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="flex-1 bg-white flex flex-col py-9 px-[37px] items-center justify-center gap-[12px] text-left text-2xs text-black1 font-tomorrow mq500small:flex-[unset] mq500small:self-stretch">
      <div className="relative tracking-[0.04em]">{walletBalance}</div>
      <div className="flex flex-row items-start justify-start gap-[5px] text-mid">
        <div
          className="relative tracking-[-0.02em] font-medium"
          style={divStyle}
        >
          {walletBalanceNio}
        </div>
        <div
          className="relative tracking-[-0.02em] font-medium text-text-color"
          style={nIOStyle}
        >
          {walletBalanceEth}
        </div>
      </div>
      <img
        className="relative w-5 h-5"
        alt=""
        src={walletTransactionIdNio}
        style={bitcoinIconStyle}
      />
    </div>
  );
};

export default NioWalletContainer;
