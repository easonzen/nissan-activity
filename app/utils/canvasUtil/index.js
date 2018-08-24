const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

/**
 * measureFontSize
 *
 * @param {String} text 要渲染的文本
 * @param {Number} trySize 初始默认文字大小
 * @param {Number} maxWidth 渲染的最大宽度
 * @returns {Number} 返回可在maxWidth内渲染出来的字体大小
 */

export const measureFontSize = function(text, trySize, maxWidth) {
    ctx.save();

    let textWidth;

    do {
        if (textWidth) {
            trySize--;
        }

        ctx.font = `${trySize}px Arial`;

        textWidth = ctx.measureText(text).width;
    } while (trySize > 10 && textWidth > maxWidth);

    ctx.restore();

    return trySize;
};

/**
 * measureText
 *
 * @param {String} text 要测试的字符串
 * @param {String} font 渲染的字体样式
 * @returns {Number} 返回以font样式渲染的宽度
 */

export const measureText = function(text, font) {
    ctx.font = font;

    return ctx.measureText(text).width;
};
