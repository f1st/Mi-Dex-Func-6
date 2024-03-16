/**
 * @file confirmationDialogComponent.js
 * @brief Confirmation dialog component for Dable framework
 * @license MIT
 */

const DialogComponent = require('./dialogComponent');

module.exports = class ConfirmationDialogComponent extends DialogComponent {
    constructor(title, message) {
        super(title, message);
        this.addCustomButton(new OkCancel('OK'));
        this.addCustomButton(new OkCancel('Cancel'));
    }

    // Additional methods specific to confirmation dialog
}
// Cập nhật constructor
constructor(p1) {
    try {
        super();
        this.modname("ConfirmDialog");
        this.shortForm("confirm");
        
        /* init config */
        if (arguments.length > 0) {
            this.config(p1);
        }
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
}

// Thêm tính năng thời gian chờ
setCountdown(time) {
    // Implement countdown logic
}

// Thêm tính năng xác định nút mặc định
setDefaultButton(button) {
    // Implement logic to set default button
}
