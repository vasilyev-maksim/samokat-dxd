import * as React from "react";

export const Button: React.FC<{
  label: string;
  marginTop?: string;
  target?: React.HTMLAttributeAnchorTarget;
  onClick?: () => void;
  className?: string;
}> = ({ label, marginTop, target, onClick, className }) => {
  return (
    <div className={"link-button-wrapper " + className} style={{ marginTop }}>
      <a
        target={target}
        href={
          "https://vml8.adj.st/promocategory/9da5ea84-b591-4f47-9287-61fb77f8632a?showcaseType=MINIMARKET&adj_t=10oehtvh&adj_campaign=childexpert_samokat&adj_adgroup=podborka_products&adj_fallback=https%3A%2F%2Fsamokat.ru%2Fpromo%2F9da5ea84-b591-4f47-9287-61fb77f8632a%3Futm_source%3Dpromoaction_marketing%26utm_medium%3Dchildexpert_smkt%26utm_campaign%3Dapr24_podborka&adj_redirect_macos=https%3A%2F%2Fsamokat.ru%2Fpromo%2F9da5ea84-b591-4f47-9287-61fb77f8632a%3Futm_source%3Dpromoaction_marketing%26utm_medium%3Dchildexpert_smkt%26utm_campaign%3Dapr24_podborka"
        }
        className="link-button"
        onClick={onClick}
      >
        {label}
      </a>
    </div>
  );
};
