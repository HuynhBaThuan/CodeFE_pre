import React from "react";
import moment from 'moment';
import { useTranslation } from 'react-i18next';
const OrderHisItem = ({ item, index, handleShowDetail, handleShowRating }) => {
    const { t } = useTranslation()
    const formattedDate = item.dateOrdered.format('DD/MM/YYYY HH:mm');
    return (
        <div>
            <div class="history-table-row">
                <div class="history-table-cell history-table-col1">{index}</div>
                <div class="history-table-cell history-table-col3">
                    <div>{t("orderTime")}: {formattedDate}</div>
                    <div>{t("receiveTime")}: 10/09/2023 14:10</div>
                </div>
                <div class="history-table-cell history-table-col4">
                    <a
                        href="/da-nang/coco-che"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><div class="text-body">
                            <strong class="d-block text-truncate"
                            >Coco Chè - Hồ Xuân Hương</strong><span class="d-block text-truncate"
                            >82 Hồ Xuân Hương, P. Khuê Mỹ, Quận Ngũ Hành Sơn, Đà
                                Nẵng</span>
                        </div></a>
                </div>
                <div class="history-table-cell history-table-col5">
                    <strong class="d-block text-truncate">Tôn Long Tiến</strong>
                </div>
                <div class="history-table-cell history-table-col6">
                    <div style={{ fontWeight: 'bold' }}><span>171,550đ</span></div>
                    <div style={{ color: 'green', fontWeight: 'bold' }}>
                        Thanh toán trực tuyến
                    </div>
                </div>
                <div class="history-table-cell history-table-col7">
                    <div class="font-weight-bold history-table-status" style={{ color: '#6cc942' }}>
                        Complete
                    </div>
                </div>
                <div class="history-table-cell history-table-col8">
                    <button className="d-block mb-1" onClick={handleShowDetail} style={{ color: '#0288d1', fontWeight: '600' }}>
                        {t("orderDetail")}
                    </button>
                </div>
                <div class="history-table-cell history-table-col8">
                    <button
                        class="font-weight-bold history-table-status gray pointer"
                        style={{ backgroundColor: '#e81f1b', color: 'white' }}
                    >
                        {t('cancel')}
                    </button>
                    <button
                        class="font-weight-bold history-table-status gray pointer"
                        style={{ backgroundColor: '#0288d1', color: 'white' }}
                        onClick={handleShowRating}
                    >
                        {t('rating')}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderHisItem