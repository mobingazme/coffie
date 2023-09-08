import { ApiVersions } from "@/constants/constants"
const {
    default: NordesBackEnd,
    NeshanMapService,
  } = require("src/services/Api");



export const sendOtpRequest = async (
    params ={
        type : 'phone',
        minute: 5,
        exists: 2,
        phone:'',
        
    }
)=> {
 return await NordesBackEnd.post(ApiVersions.v1 + '/otp',params)

}





export const loginByPhoneAndPassRequest = async (
    params ={
        phone: '',
        code : '',
    }
)=>{
    return await NordesBackEnd.post(ApiVersions.v1 + '/login_register',params)
}

export const registerByPhoneAndPassRequest = async (
    params ={
      phone: '',
        code : '',
    }
    ) => {
        return await NordesBackEnd.post(ApiVersions.v1 + 'login_register', params)
    }


export const getNordesConfig = async () => {
    return await NordesBackEnd.get(ApiVersions.v1 + "/options")
}


export const getCategoriesRequest = async (
    params = {
        OnlyHasIcon,
        OnlyHasCover,
        limit,
        WithOutChildren,
    }
)=>{
    return await NordesBackEnd.get(ApiVersions.v1 + "/categorise" , params)
};

export const getBrandsRequest = async (
    params = {
        OnlyHasIcon,
        OnlyHasCover,
        limit,
    }
) =>{
    return await NordesBackEnd.get(ApiVersions.v1 + "/brands", params);
};

export const getProductsByFilterRequest = async (
    params = {
        perPage: 1,
        page: 1,
        search: "",
        categories: [],
        brands: [],
        just_exist: 0,
        attributes: [],
        price_range: [],
        orderBy: "asc",
        varienty: [],
      }
)=> {
    return await NordesBackEnd.get(ApiVersions.v1 + "/products" , params);
}


export const getUserProfile = async () =>{
    return await NordesBackEnd.get(ApiVersions.v1 + "/user" )
}
//برایه بروز رسانی اطلاعات کاربر 
export const updateUserProfileRequest = async (params)=>{
    return await NordesBackEnd.put(ApiVersions.v1 + "user/update",params);
};

//شامل اطلاعاتی برایه خروج کاربر مثل توکن ...
export const logoutRequest = async (params) => {
    return await NordesBackEnd.post(ApiVersions.v1 + "/user/logout" , params)

};
//اطلاعاتی برایه اضافه کردن ادرس جدید
export const addAddressRequest = async (params) => {
    return await NordesBackEnd.post(ApiVersion.v1 + "/user/add_address", params);
  };

  //دریافت اطلاعات استان ها و شهر ها
  export const getProvvinceAndCityRequest = async () => {
    return await NordesBackEnd.get(ApiVersion.v1 + "/province_city");
  };

  //اطلاعات سبد خرید
  export const getBasketDetailsRequest = async (params) => {
    return await NordesBackEnd.post(
      ApiVersion.v1 + "/orders/basket/details",
      params
    );
  };

  //دریافت اطلاعات ادرس با توجه ب مختصات جغرافیایی(طول و عرض )
 //مانند نام خیابان شهر کشور ...
  export const getAddressByLatLngRequest = async (params) => {
    let { lat, lng } = params;
    return await NeshanMapService.get(
      `https://api.neshan.org/v5/reverse?lat=${lat}&lng=${lng}`
    );
  };

   //دریافت اطلاعات ادرس با توجه ب مختصات جغرافیایی(طول و عرض )
 //مانند نام خیابان شهر کشور ...
  export const getLatLngByAddressRequest = async ({ address }) => {
    return await NeshanMapService.get(
      `${window.location.origin}/api/map/search?q=${address}`
    );
  };

  //درخواست برایه لیست ادرس ها برایه پروفایل کاربر
  export const getAddressesRequest = async () => {
    return await NordesBackEnd.get(ApiVersion.v1 + "/user/get_addresses");
  };
//درخواست برایه جزییات محصول 
//NordesBackEnd? اگر نبود تلاش برایه فراخونی نکن و بدون خطا ازش بگذر
  export const getProductDetailsRequest = async (productId) => {
    return await NordesBackEnd?.get(ApiVersion.v1 + "/products/" + productId);
  };

  
//حذف ادرس مربوط ب شناسه اذرس
  export const deleteAddressRequest = async (id) => {
    return await NordesBackEnd.delete(
      ApiVersion.v1 + "/user/delete/address/" + id
    );
  };

//درخواست برایه دریافت لیست روش هایه تحویل
  export const getDeliveryMethodsRequest = async () => {
    return await NordesBackEnd.get(ApiVersion.v1 + "/transports");
  };

  //درخواست برایه دریافت لیست وضعیت هایه سفارشات است
  export const getOrdersStatusesRequest = async () => {
    return await NordesBackEnd.get(ApiVersion.v1 + "/orders/statuses");
  };

  //دریافت لیست سفارش های کاربر مربوطه
 // شامل فیلترها صفحه بندی ها مرتبسازی و... مربوط ب درخواست سفارش ها
  export const getOrdersRequest = async (params) => {
    return await NordesBackEnd.get(ApiVersion.v1 + "/user/orders", { params });
  };

  //دریافت لیست بانک هایه مربوطه
  export const getBanksListRequest = async () => {
    return await NordesBackEnd.get(ApiVersion.v1 + "/banks");
  };

  //دریافت لیست علاقه مندی ها
  export const getFavoritesRequest = async (params) => {
    return await NordesBackEnd.get(ApiVersion.v1 + "/favourite", {
      params: params,
    });
  };

  //اضافه کردن یا حذف کردن علاقع مندی ها
  export const toggleFavoritesRequest = async (params) => {
    return await NordesBackEnd.post(ApiVersion.v1 + "/favourite", params);
  };

  //دریافت لیست مقالات(بلاگ ها)
  export const getBlogsRequest = async (params) => {
    return await NordesBackEnd.get(ApiVersion.v1 + "/articles", {
      params: params,
    });
  };

  //دریافت روش هایه پرداخت 
  export const getPaymentWaysRequest = async () => {
    return await NordesBackEnd.get(ApiVersion.v1 + "/payments/methods");
  };

  //دریافت جزییات سفارش 
  export const getOrderDetailsRequest = async (id) => {
    return await NordesBackEnd.get(ApiVersion.v1 + "/user/orders/" + id);
  };

    //دریافت اعلان هایه کاربر مربوطه
  export const getNotificationsRequest = async (params) => {
    return await NordesBackEnd.get(ApiVersion.v1 + "/user/notifications/", {
      params,
    });
  };
  //علامت گذاری اعلان هایه کاربر ب عنوان خوانده شده
  export const seenNotificationsRequest = async (params) => {
    return await NordesBackEnd.put(
      ApiVersion.v1 + "/user/notifications/read",
      params
    );
  };

    //ایجاد سفارش جدید و جزییات مربوط ب سفارش
  export const createOrderRequest = async (params) => {
    return await NordesBackEnd.post(ApiVersion.v1 + "/orders/insert", params);
  };

  //روش پرداخت جدید
  export const createOrderPymentRequest = async (params) => {
    return await NordesBackEnd.post(
      ApiVersion.v1 + "/payments/method/store",
      params
    );
  };
  export const loginRegisterRequest = async (
    params = {
      code: "",
      email: "",
      phone: "",
    }
  ) => {
    return await NordesBackEnd.post(ApiVersions.v1 + "/login_register", params);
  };