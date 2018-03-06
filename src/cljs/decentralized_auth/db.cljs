(ns decentralized-auth.db
  (:require [cljs-iota.core :as iota]))


(def default-db
  {:directory/service-providers {}
   :directory/data-providers    {}

   :iota/provider      "https://testnet140.tangle.works"
   :iota/iota-instance nil
   :iota.mam/mam-state nil

   :data-provider/default-side-key "SECRET"
   :data-provider/root             ""

   :service-provider/messages []})
