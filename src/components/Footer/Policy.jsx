import { useTranslation } from "react-i18next";
import "../../utils/i18next";

const Policy = () => {
	const { t } = useTranslation();

	return (
		<div className="policy">
			<div>&copy;2022, {t("footer.policy")}</div>
			<div>{t("footer.politics")}</div>
		</div>
	)
}

export default Policy
