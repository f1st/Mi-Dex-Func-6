/**
 * @file errorDialogComponent.js
 * @brief Error dialog component for Dable framework
 * @license MIT
 */

const DialogComponent = require('./dialogComponent');

module.exports = class ErrorDialogComponent extends DialogComponent {
    constructor(message) {
        super('Error', message);
    }

    // Additional methods specific to error dialog
}

// Cập nhật constructor
constructor(p1) {
    try {
        super();
        this.modname("ErrorDialog");
        this.shortForm("error");
        
        /* init config */
        if (arguments.length > 0) {
            this.config(p1);
        }
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
}

// Thêm tính năng ghi nhật ký lỗi
logError(error) {
    // Implement logic to log errors
}

// Thêm tính năng hiển thị thông báo lỗi cụ thể
showDetailedError(error) {
    // Implement logic to show detailed error message
}
