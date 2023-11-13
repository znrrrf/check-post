import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constant";

const style = StyleSheet.create({
  container: {
    width: "100%",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.large
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.large,
    height: "100%",
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.fortary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  cardContainer: {
    width: "100%",
    padding: 5
  }
})

export default style