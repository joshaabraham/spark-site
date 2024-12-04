import { environment } from "environments/environment";

export class ApiRoutes {

    //Subscriptions
    public static readonly SUBSCRIPTION_CREATE_AND_LIST: string = environment + 'Subscriptions/subscriptionCreateList/'; 
    public static readonly SUBSCRIPTION_DETAIL: string = environment + 'Subscriptions/subscription/<int:pk>/'; 
    public static readonly PAYMENT_CREATE_AND_LIST: string = environment + 'Subscriptions/paymentCreateList/';
    public static readonly PAYMENT_DETAIL: string = environment + 'Subscriptions/payment/<int:pk>/'; 


    //Payments
    public static readonly PAYMENTS_CREATE_AND_LIST: string = environment + 'Payments/subscriptionCreateList/'; 
    public static readonly PAYMENTS_DETAIL: string = environment + 'Payments/subscription/<int:pk>/'; 
    public static readonly PAYMENTS_PAYMENT_CREATE_AND_LIST: string = environment + 'Payments/paymentCreateList/';
    public static readonly PAYMENTS_PAYMENT_DETAIL: string = environment + 'Payments/payment/<int:pk>/'; 


    //Schools
    public static readonly SCHOOL_SCHOOL_CREATE_AND_LIST: string = environment + 'Schools/schoolCreateList/'; 
    public static readonly SCHOOL_SCHOOL_DETAIL: string = environment + 'Schools/school/<int:pk>/'; 
    public static readonly SCHOOL_TEACHER_CREATE_AND_LIST: string = environment + 'Schools/teacherCreateList/'; 
    public static readonly SCHOOL_TEACHER_DETAIL: string = environment + 'Schools/teacher/<int:pk>/'; 
    public static readonly SCHOOL_STUDENT_CREATE_AND_LIST: string = environment + 'Schools/studentCreateList/';
    public static readonly SCHOOL_STUDENT_DETAIL: string = environment + 'Schools/student/<int:pk>/'; 
    public static readonly SCHOOL_COURSE_CREATE_AND_LIST: string = environment + 'Schools/courseCreateList/';
    public static readonly SCHOOL_COURSE_DETAIL: string = environment + 'Schools/course/<int:pk>/'; 
    public static readonly SCHOOL_SECTION_CREATE_AND_LIST: string = environment + 'Schools/sectionCreateList/'; 
    public static readonly SCHOOL_SECTION_DETAIL: string = environment + 'Schools/section/<int:pk>/'; 
    public static readonly SCHOOL_CHARTER_CREATE_AND_LIST: string = environment + 'Schools/chapterCreateList/';
    public static readonly SCHOOL_CHAPTER_DETAIL: string = environment + 'Schools/chapter/<int:pk>/'; 

    
    //Teachers
    public static readonly TEACHER_SCHOOL_CREATE_AND_LIST: string = environment + 'Teachers/schoolCreateList/'; 
    public static readonly TEACHER_SCHOOL_DETAIL: string = environment + 'Teachers/school/<int:pk>/'; 
    public static readonly TEACHER_TEACHER_CREATE_AND_LIST: string = environment + 'Teachers/teacherCreateList/'; 
    public static readonly TEACHER_TEACHER_DETAIL: string = environment + 'Teachers/teacher/<int:pk>/'; 
    public static readonly TEACHER_STUDENT_CREATE_AND_LIST: string = environment + 'Teachers/studentCreateList/';
    public static readonly TEACHER_STUDENT_DETAIL: string = environment + 'Teachers/student/<int:pk>/'; 
    public static readonly TEACHER_COURSE_CREATE_AND_LIST: string = environment + 'Teachers/courseCreateList/';
    public static readonly TEACHER_COURSE_DETAIL: string = environment + 'Teachers/course/<int:pk>/'; 
    public static readonly TEACHER_SECTION_CREATE_AND_LIST: string = environment + 'Teachers/sectionCreateList/'; 
    public static readonly TEACHER_SECTION_DETAIL: string = environment + 'Teachers/section/<int:pk>/'; 
    public static readonly TEACHER_CHARTER_CREATE_AND_LIST: string = environment + 'Teachers/chapterCreateList/';
    public static readonly TEACHER_CHAPTER_DETAIL: string = environment + 'Teachers/chapter/<int:pk>/';

    //Students
    public static readonly STUDENT_SCHOOL_CREATE_AND_LIST: string = environment + 'Students/schoolCreateList/'; 
    public static readonly STUDENT_SCHOOL_DETAIL: string = environment + 'Students/school/<int:pk>/'; 
    public static readonly STUDENT_TEACHER_CREATE_AND_LIST: string = environment + 'Students/teacherCreateList/'; 
    public static readonly STUDENT_TEACHER_DETAIL: string = environment + 'Students/teacher/<int:pk>/'; 
    public static readonly STUDENT_STUDENT_CREATE_AND_LIST: string = environment + 'Students/studentCreateList/';
    public static readonly STUDENT_STUDENT_DETAIL: string = environment + 'Students/student/<int:pk>/'; 
    public static readonly STUDENT_COURSE_CREATE_AND_LIST: string = environment + 'Students/courseCreateList/';
    public static readonly STUDENT_COURSE_DETAIL: string = environment + 'Students/course/<int:pk>/'; 
    public static readonly STUDENT_SECTION_CREATE_AND_LIST: string = environment + 'Students/sectionCreateList/'; 
    public static readonly STUDENT_SECTION_DETAIL: string = environment + 'Students/section/<int:pk>/'; 
    public static readonly STUDENT_CHARTER_CREATE_AND_LIST: string = environment + 'Students/chapterCreateList/';
    public static readonly STUDENT_CHAPTER_DETAIL: string = environment + 'Students/chapter/<int:pk>/';


    //Sections
    public static readonly SECTION_SCHOOL_CREATE_AND_LIST: string = environment + 'Sections/schoolCreateList/'; 
    public static readonly SECTION_SCHOOL_DETAIL: string = environment + 'Sections/school/<int:pk>/'; 
    public static readonly SECTION_TEACHER_CREATE_AND_LIST: string = environment + 'Sections/teacherCreateList/'; 
    public static readonly SECTION_TEACHER_DETAIL: string = environment + 'Sections/teacher/<int:pk>/'; 
    public static readonly SECTION_STUDENT_CREATE_AND_LIST: string = environment + 'Sections/studentCreateList/';
    public static readonly SECTION_STUDENT_DETAIL: string = environment + 'Sections/student/<int:pk>/'; 
    public static readonly SECTION_COURSE_CREATE_AND_LIST: string = environment + 'Sections/courseCreateList/';
    public static readonly SECTION_COURSE_DETAIL: string = environment + 'Sections/course/<int:pk>/'; 
    public static readonly SECTION_SECTION_CREATE_AND_LIST: string = environment + 'Sections/sectionCreateList/'; 
    public static readonly SECTION_SECTION_DETAIL: string = environment + 'Sections/section/<int:pk>/'; 
    public static readonly SECTION_CHARTER_CREATE_AND_LIST: string = environment + 'Sections/chapterCreateList/';
    public static readonly SECTION_CHAPTER_DETAIL: string = environment + 'Sections/chapter/<int:pk>/';


    //Chapters
    public static readonly CHAPTER_SCHOOL_CREATE_AND_LIST: string = environment + 'Chapters/schoolCreateList/'; 
    public static readonly CHAPTER_SCHOOL_DETAIL: string = environment + 'Chapters/school/<int:pk>/'; 
    public static readonly CHAPTER_TEACHER_CREATE_AND_LIST: string = environment + 'Chapters/teacherCreateList/'; 
    public static readonly CHAPTER_TEACHER_DETAIL: string = environment + 'Chapters/teacher/<int:pk>/'; 
    public static readonly CHAPTER_STUDENT_CREATE_AND_LIST: string = environment + 'Chapters/studentCreateList/';
    public static readonly CHAPTER_STUDENT_DETAIL: string = environment + 'Chapters/student/<int:pk>/'; 
    public static readonly CHAPTER_COURSE_CREATE_AND_LIST: string = environment + 'Chapters/courseCreateList/';
    public static readonly CHAPTER_COURSE_DETAIL: string = environment + 'Chapters/course/<int:pk>/'; 
    public static readonly CHAPTER_SECTION_CREATE_AND_LIST: string = environment + 'Chapters/sectionCreateList/'; 
    public static readonly CHAPTER_SECTION_DETAIL: string = environment + 'Chapters/section/<int:pk>/'; 
    public static readonly CHAPTER_CHARTER_CREATE_AND_LIST: string = environment + 'Chapters/chapterCreateList/';
    public static readonly CHAPTER_CHAPTER_DETAIL: string = environment + 'Chapters/chapter/<int:pk>/';

    //Courses
    public static readonly COURSES_SCHOOL_CREATE_AND_LIST: string = environment + 'Courses/schoolCreateList/'; 
    public static readonly COURSES_SCHOOL_DETAIL: string = environment + 'Courses/school/<int:pk>/'; 
    public static readonly COURSES_TEACHER_CREATE_AND_LIST: string = environment + 'Courses/teacherCreateList/'; 
    public static readonly COURSES_TEACHER_DETAIL: string = environment + 'Courses/teacher/<int:pk>/'; 
    public static readonly COURSES_STUDENT_CREATE_AND_LIST: string = environment + 'Courses/studentCreateList/';
    public static readonly COURSES_STUDENT_DETAIL: string = environment + 'Courses/student/<int:pk>/'; 
    public static readonly COURSES_COURSE_CREATE_AND_LIST: string = environment + 'Courses/courseCreateList/';
    public static readonly COURSES_COURSE_DETAIL: string = environment + 'Courses/course/<int:pk>/'; 
    public static readonly COURSES_SECTION_CREATE_AND_LIST: string = environment + 'Courses/sectionCreateList/'; 
    public static readonly COURSES_SECTION_DETAIL: string = environment + 'Courses/section/<int:pk>/'; 
    public static readonly COURSES_CHARTER_CREATE_AND_LIST: string = environment + 'Courses/chapterCreateList/';
    public static readonly COURSES_CHAPTER_DETAIL: string = environment + 'Courses/chapter/<int:pk>/';


    //Members
    public static readonly MEMBERS_SCHOOL_CREATE_AND_LIST: string = environment + 'Members/membersCreateList/'; 
    public static readonly MEMBERS_SCHOOL_DETAIL: string = environment + 'Members/members/<int:pk>/'; 
    public static readonly MEMBERS_TEACHER_CREATE_AND_LIST: string = environment + 'Members/teacherCreateList/'; 
    public static readonly MEMBERS_TEACHER_DETAIL: string = environment + 'Members/teacher/<int:pk>/'; 
    public static readonly MEMBERS_STUDENT_CREATE_AND_LIST: string = environment + 'Members/studentCreateList/';
    public static readonly MEMBERS_STUDENT_DETAIL: string = environment + 'Members/student/<int:pk>/'; 
    public static readonly MEMBERS_COURSE_CREATE_AND_LIST: string = environment + 'Members/courseCreateList/';
    public static readonly MEMBERS_COURSE_DETAIL: string = environment + 'Members/course/<int:pk>/'; 
    public static readonly MEMBERS_SECTION_CREATE_AND_LIST: string = environment + 'Members/sectionCreateList/'; 
    public static readonly MEMBERS_SECTION_DETAIL: string = environment + 'Members/section/<int:pk>/'; 
    public static readonly MEMBERS_CHARTER_CREATE_AND_LIST: string = environment + 'Members/chapterCreateList/';
    public static readonly MEMBERS_CHAPTER_DETAIL: string = environment + 'Members/chapter/<int:pk>/';

        
    //Sport_events
    public static readonly SPORTSEVENTS_MEMBERS_CREATE_AND_LIST: string = environment + 'Sport_events/membersCreateList/'; 
    public static readonly SPORTSEVENTS_MEMBERS_DETAIL: string = environment + 'Sport_events/member/<int:pk>/'; 
    public static readonly SPORTSEVENTS_SPORTSEVENTS_CREATE_AND_LIST: string = environment + 'Sport_events/sport_eventsCreateList/'; 
    public static readonly SPORTSEVENTS_SPORTSEVENTS_DETAIL: string = environment + 'Sport_events/sport_event/<int:pk>/'; 
    public static readonly SPORTSEVENTS_PROMOTION_CREATE_AND_LIST: string = environment + 'Sport_events/promotionCreateList/';
    public static readonly SPORTSEVENTS_PROMOTION_DETAIL: string = environment + 'Sport_events/promotion/<int:pk>/'; 
    public static readonly SPORTSEVENTS_SUBSCRIPTIONASSOC_CREATE_AND_LIST: string = environment + 'Sport_events/subscriptionsAssocCreateList/';
    public static readonly SPORTSEVENTS_SUBSCRIPTIONASSOC_DETAIL: string = environment + 'Sport_events/subscriptionAssoc/<int:pk>';


    //Promotions
    public static readonly PROMOTIONS_MEMBERS_CREATE_AND_LIST: string = environment + 'Promotions/membersCreateList/'; 
    public static readonly PROMOTIONS_MEMBERS_DETAIL: string = environment + 'Promotions/member/<int:pk>/'; 
    public static readonly PROMOTIONS_SPORTSEVENTS_CREATE_AND_LIST: string = environment + 'Promotions/sport_eventsCreateList/'; 
    public static readonly PROMOTIONS_SPORTSEVENTS_DETAIL: string = environment + 'Promotions/sport_event/<int:pk>/'; 
    public static readonly PROMOTIONS_PROMOTION_CREATE_AND_LIST: string = environment + 'Sport_events/promotionCreateList/';
    public static readonly PROMOTIONS_PROMOTION_DETAIL: string = environment + 'Promotions/promotion/<int:pk>/'; 
    public static readonly PROMOTIONS_SUBSCRIPTIONASSOC_CREATE_AND_LIST: string = environment + 'Promotions/subscriptionsAssocCreateList/';
    public static readonly PROMOTIONS_SUBSCRIPTIONASSOC_DETAIL: string = environment + 'Promotions/subscriptionAssoc/<int:pk>/';


    //SubscriptionsAssoc
    public static readonly SUBSCRIPTIONASSOC_MEMBERS_CREATE_AND_LIST: string = environment + 'SubscriptionsAssoc/membersCreateList/'; 
    public static readonly SUBSCRIPTIONASSOC_MEMBERS_DETAIL: string = environment + 'SubscriptionsAssoc/member/<int:pk>/'; 
    public static readonly SUBSCRIPTIONASSOC_SPORTSEVENTS_CREATE_AND_LIST: string = environment + 'SubscriptionsAssoc/sport_eventsCreateList/'; 
    public static readonly SUBSCRIPTIONASSOC_SPORTSEVENTS_DETAIL: string = environment + 'SubscriptionsAssoc/sport_event/<int:pk>/'; 
    public static readonly SUBSCRIPTIONASSOC_PROMOTION_CREATE_AND_LIST: string = environment + 'SubscriptionsAssoc/promotionCreateList/';
    public static readonly SUBSCRIPTIONASSOC_PROMOTION_DETAIL: string = environment + 'SubscriptionsAssoc/promotion/<int:pk>/'; 
    public static readonly SUBSCRIPTIONASSOC_SUBSCRIPTIONASSOC_CREATE_AND_LIST: string = environment + 'SubscriptionsAssoc/subscriptionsAssocCreateList/';
    public static readonly SUBSCRIPTIONASSOC_SUBSCRIPTIONASSOC_DETAIL: string = environment + 'SubscriptionsAssoc/subscriptionAssoc/<int:pk>/';


    //Sport Assoc configuration
    public static readonly SCC_MEMBERS_CREATE_AND_LIST: string = environment + 'scc/sports_association_configurationsCreateList/'; 
    public static readonly SCC_MEMBERS_DETAIL: string = environment + 'scc/sports_association_configuration/<int:pk>/'; 


    //Chats
    public static readonly CHATS_CREATE_AND_LIST: string = environment + 'chats/chatsCreateList/'; 
    public static readonly CHATS_DETAIL: string = environment + 'chats/chat/<int:pk>/'; 
    public static readonly CHATS_MESSAGES_DETAIL: string = environment + 'chats/messagesCreateList/'; 


    //Contacts
    public static readonly CONTACTS_CREATE_AND_LIST: string = environment + 'contacts/contactCreateList/'; 
    public static readonly CONTACTS_DETAIL: string = environment + 'contacts/contact/<int:pk>/'; 

    //User Actions
    public static readonly USER_ACTIONS_CREATE_AND_LIST: string = environment + 'useractions/useractionCreate/'; 
    public static readonly USER_ACTIONS_DETAIL: string = environment + 'useractions/useraction/<int:pk>/'; 

    //Market
    public static readonly MARKET_CATEGORIES_CREATE_AND_LIST: string = environment + 'market/categoriesCreateList/'; 
    public static readonly MARKET_CATEGORIES_DETAIL: string = environment + 'market/categorie/<int:pk>/';
    public static readonly MARKET_PRODUCT_CREATE_AND_LIST: string = environment + 'market/productsCreateList/'; 
    public static readonly MARKET_PRODUCT_CATEGORIES_DETAIL: string = environment + 'market/product/<int:pk>/';
    public static readonly MARKET_CUSTOMERS_CREATE_AND_LIST: string = environment + 'market/customersCreateList/'; 
    public static readonly MARKET_CUSTOMER_CATEGORIES_DETAIL: string = environment + 'market/customer/<int:pk>/';
    public static readonly MARKET_ORDERS_CREATE_AND_LIST: string = environment + 'market/ordersCreateList/'; 
    public static readonly MARKET_ORDER_DETAIL: string = environment + 'market/order/<int:pk>/';
    public static readonly MARKET_ORDER_ITEMS_CREATE_AND_LIST: string = environment + 'market/orderitemsCreateList/'; 
    public static readonly MARKET_ORDER_ITEM_DETAIL: string = environment + 'market/orderitem/<int:pk>/';

     //Image
     public static readonly IMAGE_ALBUMS_CREATE_AND_LIST: string = environment + 'images_app/albumsCreateList/'; 
     public static readonly IMAGE_ALBUMS_CREATE_DETAIL: string = environment + 'images_app/album/<int:pk>/';
     public static readonly IMAGE_IMAGES_CREATE_AND_LIST: string = environment + 'images_app/imagesCreateList/';
     public static readonly IMAGE_IMAGES_DETAIL: string = environment + 'images_app/image/<int:pk>/';     

    
    //Team
    public static readonly TEAM_TEAMS_CREATE_AND_LIST: string = environment + 'team_app/teamsCreateList/'; 
    public static readonly TEAM_TEAMS_DETAIL: string = environment + 'team_app/team/<int:pk>/';
    public static readonly TEAM_PLAYERS_CREATE_AND_LIST: string = environment + 'team_app/playersCreateList/';
    public static readonly TEAM_PLAYERS_DETAIL: string = environment + 'team_app/player/<int:pk>/'; 

    //Advertisment
    public static readonly ADVERTISMENT_CAMPAGNES_CREATE_AND_LIST: string = environment + 'advert_app/campagnes/'; 
    public static readonly ADVERTISMENT_CAMPAGNES_DETAIL: string = environment + 'advert_app/campagnes/<int:pk>/';
    public static readonly ADVERTISMENT_PUBLICITES_CREATE_AND_LIST: string = environment + 'advert_app/publicites/';
    public static readonly ADVERTISMENT_PUBLICITES_DETAIL: string = environment + 'advert_app/publicites/<int:pk>/';
    public static readonly ADVERTISMENT_AUDIENCE_CREATE_AND_LIST: string = environment + 'advert_app/controle-audience/';
    public static readonly ADVERTISMENT_AUDIENCE_DETAIL: string = environment + 'advert_app/controle-audience/<int:pk>/';
    public static readonly ADVERTISMENT_BUDGET_ET_CALENDRIER_CREATE_AND_LIST: string = environment + 'advert_app/budget-et-calendrier/';
    public static readonly ADVERTISMENT_BUDGET_ET_CALENDRIER_DETAIL: string = environment + 'advert_app/budget-et-calendrier/<int:pk>/';
    public static readonly ADVERTISMENT_P_FACEBOOK_CREATE_AND_LIST: string = environment + 'advert_app/page-facebook/';
    public static readonly ADVERTISMENT_P_FACEBOOK_DETAIL: string = environment + 'advert_app/page-facebook/<int:pk>/';
    public static readonly ADVERTISMENT_BUDGET_CAMPAGNE_CREATE_AND_LIST: string = environment + 'advert_app/budget-campagne/';
    public static readonly ADVERTISMENT_BUDGET_CAMPAGNE_DETAIL: string = environment + 'advert_app/budget-campagne/<int:pk>/';


    //Localisation
    public static readonly LOCALISATION_CREATE_AND_LIST: string = environment + 'localisation_app/addresses/';
    public static readonly LOCALISATION_DETAIL: string = environment + 'localisation_app/addresses/<int:pk>/';

    //Codes
    public static readonly CODES_QR_CREATE_AND_LIST: string = environment + 'codes_app/qr_codes/';
    public static readonly CODES_QR_DETAIL: string = environment + 'codes_app/qr_codes/<int:pk>/';
    //public static readonly CODES_QR_CREATE_AND_LIST: string = environment + 'codes_app/qr_codes/<int:pk>/image/';

    //User config
    public static readonly USER_CONFIG_CONFIGURATIONS_CREATE_AND_LIST: string = environment + 'user_config/user_configurations/';
    public static readonly USER_CONFIG_CONFIGURATIONS_DETAIL: string = environment + 'user_config/user_configurations/<int:pk>/';


    //Employment
    public static readonly EMPLOYMENT_OFFER_CREATE_AND_LIST: string = environment + 'employment_app/job_offersCreateList/';
    public static readonly EMPLOYMENT_OFFER_DETAIL: string = environment + 'employment_app/job_offer/<int:pk>/';
    public static readonly EMPLOYMENT_SEARCH_CREATE_AND_LIST: string = environment + 'employment_app/job_searchesCreateList/';
    public static readonly EMPLOYMENT_SEARCH_DETAIL: string = environment + 'employment_app/job_search/<int:pk>/';

    //Blog
    public static readonly BLOG_POSTS_CREATE_AND_LIST: string = environment + 'blog_app/posts/';
    public static readonly BLOG_POSTS_DETAIL: string = environment + 'blog_app/posts/<int:pk>/';
    public static readonly BLOG_COMMENTS_CREATE_AND_LIST: string = environment + 'blog_app/comments/';
    public static readonly BLOG_COMMENTS_DETAIL: string = environment + 'blog_app/comments/<int:pk>/';


    //Invitation
    public static readonly INVITATION_INVITATION_CREATE_AND_LIST: string = environment + 'invitation_app/invitationCreate/';
    public static readonly INVITATION_INVITATION_DETAIL: string = environment + 'invitation_app/invitation/<int:pk>/';


    //Interest
    public static readonly INTEREST_CREATE_AND_LIST: string = environment + 'interests_app/userinterests/';
    public static readonly INTEREST_DETAIL: string = environment + 'interests_app/userinterests/<int:pk>/';


    //Sport
    public static readonly SPORT_CREATE_LIST: string = environment + 'sport_app/sportCreate/';
    public static readonly SPORT_DETAIL: string = environment + 'sport_app/sport/<int:pk>/';
    public static readonly SPORT_LIST: string = environment + 'sport_app/sport/list/';

    //Profile
    public static readonly PROFILE_CREATE_LIST: string = environment + 'profile_app/profiles/';
    public static readonly PROFILE_DETAIL: string = environment + 'profile_app/profile/';
 


}
