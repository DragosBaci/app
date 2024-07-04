import { TextStyle } from 'react-native';

export const fontFamily = {
    outfit: {
        thin: 'Outfit-Thin',
        light: 'Outfit-Light',
        base: 'Outfit-Regular',
        medium: 'Outfit-Medium',
        bold: 'Outfit-Bold',
        extraBold: 'Outfit-ExtraBold',
    },
    integralcf: {
        bold: 'FONTSPRING DEMO - Integral CF Bold',
        regular: 'FONTSPRING DEMO - Integral CF Regular',
    },
    openSans: {
        light: 'Open Sans-Light',
        regular: 'OpenSans-Regular',
        semiBold: 'OpenSans-SemiBold',
        bold: 'OpenSans-Bold',
        boldItalic: 'OpenSans-BoldItalic',
        extraBold: 'OpenSans-ExtraBold',
        medium: 'OpenSans-Medium',
    },
};

// Base font size: 16
export const fontSize = {
    xxs: 10, //   Small labels
    xs: 12, //    Pills, navigation labels
    s: 14, //     Buttons and secondary information
    base: 16, //  Used for any font that is not specified otherwise
    base_l: 18, // Used for any font that is not specified otherwise
    l: 22, //     Secondary headings
    xl: 24, //    Page titles
    xxl: 32, //    Large headings
    xxxl: 40, //   Extra large headings
};

/**
 * Typography system is based on figma design, can be used inside any style object via the spread operator
 * Example usage:
 * const styles = StyleSheet.create({
 title: {
 color: '#fff',
 ...fontStyles.pageTitle
 },
 }
 */
export const typography: Record<string, TextStyle> = {
    mainHeadline: {
        fontFamily: fontFamily.openSans.extraBold,
        fontWeight: '700',
        fontSize: fontSize.xxxl,
        lineHeight: 48,
    },
    largeHeadline: {
        fontFamily: fontFamily.openSans.extraBold,
        fontWeight: '600',
        fontSize: fontSize.xxl,
        lineHeight: 40,
    },
    headline: {
        fontFamily: fontFamily.openSans.extraBold,
        fontWeight: '700',
        fontSize: fontSize.xxxl,
        lineHeight: 48,
    },
    smallHeadline: {
        fontFamily: fontFamily.openSans.bold,
        fontWeight: '500',
        fontSize: fontSize.l,
        lineHeight: 28,
    },
    pageTitle: {
        fontFamily: fontFamily.integralcf.bold,
        fontWeight: '600',
        fontSize: fontSize.xxl,
        lineHeight: 32,
    },
    pageSubtitle: {
        fontFamily: fontFamily.integralcf.regular,
        fontWeight: '600',
        fontSize: fontSize.l,
        lineHeight: 32,
    },
    body_l: {
        fontFamily: fontFamily.openSans.regular,
        fontWeight: '300',
        fontSize: fontSize.base_l,
        lineHeight: 24,
    },
    body_m: {
        fontFamily: fontFamily.openSans.regular,
        fontWeight: '300',
        fontSize: fontSize.base,
        lineHeight: 24,
    },
    body_s: {
        fontFamily: fontFamily.openSans.medium,
        fontWeight: '500',
        fontSize: fontSize.s,
        lineHeight: 20,
    },

    body_s_300: {
        fontFamily: fontFamily.openSans.medium,
        fontWeight: '300',
        fontSize: fontSize.s,
        lineHeight: 20,
    },

    body_xs: {
        fontFamily: fontFamily.openSans.medium,
        fontWeight: '500',
        fontSize: fontSize.xs,
        lineHeight: 16,
    },
    body_xxs: {
        fontFamily: fontFamily.openSans.medium,
        fontWeight: '500',
        fontSize: fontSize.xxs,
        lineHeight: 12,
    },
};
