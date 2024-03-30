import Image from "next/image";

export default function Transactions() {
  return (
    <div className="rounded-md shadow-sm inline-block p-3 border-2 flex flex-col relative">
      <div className="mb-3">
        <h3>Transactions</h3>
      </div>
      <div className="sm:min-w-72 md:min-w-96 min-h-0 overflow-y-auto flex-auto">
        <ul className="transaction_list">
          <li className="transaction gap-2 mb-2 border-b-slate-300 flex">
            <span className="inline-block self-center">
              <Image
                width={32}
                height={32}
                alt="credit card icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO2aWwrCMBBFzzJ87ER0BSruxvovBTflY0s+fvyKCOlPSa0R2o7JPXAhpRmY3E4y+SgIIYQQQghRsQEuwANwiei9ljOwpoWDgWS7Vvnpy7tMtAoZcDGQWF86hQy4G0isL91CBrjMJANUATWGLkltAXQGoEMQdQHUBtE9AHMXoSewBSYNwc6/K/zc5AwoavNCsRVFigaMIwwYpWiAawkeejGdG0BEBVTP1hVchAzguwr4dc7fVsAkYgtMc2+DuxQNeHoTsr0IuQQlA1QBNYYuSW0BdAagQxB1AUy1wRkwjxhbj4k2oOLbsfWYaAPmwCJibD0m2gCXsGSAKiDjX2SuBDgbSKwvHUMGrA0k1peWNFAaSK5r7Wlh5f+jS+lMuPuyb/zyQgghhBCCzHgBfaiOejzs1lYAAAAASUVORK5CYII="
              />
            </span>
            <span className="flex-1">
              <p>Internal Payment</p>
              <p>Expiry 06/2004</p>
            </span>
            <span className="">
              <p className="text-green-600">+ $192.00</p>
            </span>
          </li>
          <li className="transaction gap-2 mb-2 border-b-slate-300 flex">
            <span className="inline-block self-center">
              <Image
                width={32}
                height={32}
                alt="credit card icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO2aWwrCMBBFzzJ87ER0BSruxvovBTflY0s+fvyKCOlPSa0R2o7JPXAhpRmY3E4y+SgIIYQQQghRsQEuwANwiei9ljOwpoWDgWS7Vvnpy7tMtAoZcDGQWF86hQy4G0isL91CBrjMJANUATWGLkltAXQGoEMQdQHUBtE9AHMXoSewBSYNwc6/K/zc5AwoavNCsRVFigaMIwwYpWiAawkeejGdG0BEBVTP1hVchAzguwr4dc7fVsAkYgtMc2+DuxQNeHoTsr0IuQQlA1QBNYYuSW0BdAagQxB1AUy1wRkwjxhbj4k2oOLbsfWYaAPmwCJibD0m2gCXsGSAKiDjX2SuBDgbSKwvHUMGrA0k1peWNFAaSK5r7Wlh5f+jS+lMuPuyb/zyQgghhBCCzHgBfaiOejzs1lYAAAAASUVORK5CYII="
              />
            </span>
            <span className="flex-1">
              <p>Internal Payment</p>
              <p>Expiry 06/2004</p>
            </span>
            <span className="">
              <p className="text-red-600">- $192.00</p>
            </span>
          </li>
          <li className="transaction gap-2 mb-2 border-b-slate-300 flex">
            <span className="inline-block self-center">
              <Image
                width={32}
                height={32}
                alt="credit card icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO2aWwrCMBBFzzJ87ER0BSruxvovBTflY0s+fvyKCOlPSa0R2o7JPXAhpRmY3E4y+SgIIYQQQghRsQEuwANwiei9ljOwpoWDgWS7Vvnpy7tMtAoZcDGQWF86hQy4G0isL91CBrjMJANUATWGLkltAXQGoEMQdQHUBtE9AHMXoSewBSYNwc6/K/zc5AwoavNCsRVFigaMIwwYpWiAawkeejGdG0BEBVTP1hVchAzguwr4dc7fVsAkYgtMc2+DuxQNeHoTsr0IuQQlA1QBNYYuSW0BdAagQxB1AUy1wRkwjxhbj4k2oOLbsfWYaAPmwCJibD0m2gCXsGSAKiDjX2SuBDgbSKwvHUMGrA0k1peWNFAaSK5r7Wlh5f+jS+lMuPuyb/zyQgghhBCCzHgBfaiOejzs1lYAAAAASUVORK5CYII="
              />
            </span>
            <span className="flex-1">
              <p>Internal Payment</p>
              <p>Expiry 06/2004</p>
            </span>
            <span className="">
              <p className="text-green-600">+ $262.00</p>
            </span>
          </li>
          <li className="transaction gap-2 mb-2 border-b-slate-300 flex">
            <span className="inline-block self-center">
              <Image
                width={32}
                height={32}
                alt="credit card icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO2aWwrCMBBFzzJ87ER0BSruxvovBTflY0s+fvyKCOlPSa0R2o7JPXAhpRmY3E4y+SgIIYQQQghRsQEuwANwiei9ljOwpoWDgWS7Vvnpy7tMtAoZcDGQWF86hQy4G0isL91CBrjMJANUATWGLkltAXQGoEMQdQHUBtE9AHMXoSewBSYNwc6/K/zc5AwoavNCsRVFigaMIwwYpWiAawkeejGdG0BEBVTP1hVchAzguwr4dc7fVsAkYgtMc2+DuxQNeHoTsr0IuQQlA1QBNYYuSW0BdAagQxB1AUy1wRkwjxhbj4k2oOLbsfWYaAPmwCJibD0m2gCXsGSAKiDjX2SuBDgbSKwvHUMGrA0k1peWNFAaSK5r7Wlh5f+jS+lMuPuyb/zyQgghhBCCzHgBfaiOejzs1lYAAAAASUVORK5CYII="
              />
            </span>
            <span className="flex-1">
              <p>Internal Payment</p>
              <p>Expiry 06/2004</p>
            </span>
            <span className="">
              <p className="text-green-600">+ $262.00</p>
            </span>
          </li>
          <li className="transaction gap-2 mb-2 border-b-slate-300 flex">
            <span className="inline-block self-center">
              <Image
                width={32}
                height={32}
                alt="credit card icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO2aWwrCMBBFzzJ87ER0BSruxvovBTflY0s+fvyKCOlPSa0R2o7JPXAhpRmY3E4y+SgIIYQQQghRsQEuwANwiei9ljOwpoWDgWS7Vvnpy7tMtAoZcDGQWF86hQy4G0isL91CBrjMJANUATWGLkltAXQGoEMQdQHUBtE9AHMXoSewBSYNwc6/K/zc5AwoavNCsRVFigaMIwwYpWiAawkeejGdG0BEBVTP1hVchAzguwr4dc7fVsAkYgtMc2+DuxQNeHoTsr0IuQQlA1QBNYYuSW0BdAagQxB1AUy1wRkwjxhbj4k2oOLbsfWYaAPmwCJibD0m2gCXsGSAKiDjX2SuBDgbSKwvHUMGrA0k1peWNFAaSK5r7Wlh5f+jS+lMuPuyb/zyQgghhBCCzHgBfaiOejzs1lYAAAAASUVORK5CYII="
              />
            </span>
            <span className="flex-1">
              <p>Internal Payment</p>
              <p>Expiry 06/2004</p>
            </span>
            <span className="">
              <p className="text-red-600">- $192.00</p>
            </span>
          </li>
          <li className="transaction gap-2 mb-2 border-b-slate-300 flex">
            <span className="inline-block self-center">
              <Image
                width={32}
                height={32}
                alt="credit card icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO2aWwrCMBBFzzJ87ER0BSruxvovBTflY0s+fvyKCOlPSa0R2o7JPXAhpRmY3E4y+SgIIYQQQghRsQEuwANwiei9ljOwpoWDgWS7Vvnpy7tMtAoZcDGQWF86hQy4G0isL91CBrjMJANUATWGLkltAXQGoEMQdQHUBtE9AHMXoSewBSYNwc6/K/zc5AwoavNCsRVFigaMIwwYpWiAawkeejGdG0BEBVTP1hVchAzguwr4dc7fVsAkYgtMc2+DuxQNeHoTsr0IuQQlA1QBNYYuSW0BdAagQxB1AUy1wRkwjxhbj4k2oOLbsfWYaAPmwCJibD0m2gCXsGSAKiDjX2SuBDgbSKwvHUMGrA0k1peWNFAaSK5r7Wlh5f+jS+lMuPuyb/zyQgghhBCCzHgBfaiOejzs1lYAAAAASUVORK5CYII="
              />
            </span>
            <span className="flex-1">
              <p>Internal Payment</p>
              <p>Expiry 06/2004</p>
            </span>
            <span className="">
              <p className="text-green-600">+ $262.00</p>
            </span>
          </li>
          <li className="transaction gap-2 mb-2 border-b-slate-300 flex">
            <span className="inline-block self-center">
              <Image
                width={32}
                height={32}
                alt="credit card icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO2aWwrCMBBFzzJ87ER0BSruxvovBTflY0s+fvyKCOlPSa0R2o7JPXAhpRmY3E4y+SgIIYQQQghRsQEuwANwiei9ljOwpoWDgWS7Vvnpy7tMtAoZcDGQWF86hQy4G0isL91CBrjMJANUATWGLkltAXQGoEMQdQHUBtE9AHMXoSewBSYNwc6/K/zc5AwoavNCsRVFigaMIwwYpWiAawkeejGdG0BEBVTP1hVchAzguwr4dc7fVsAkYgtMc2+DuxQNeHoTsr0IuQQlA1QBNYYuSW0BdAagQxB1AUy1wRkwjxhbj4k2oOLbsfWYaAPmwCJibD0m2gCXsGSAKiDjX2SuBDgbSKwvHUMGrA0k1peWNFAaSK5r7Wlh5f+jS+lMuPuyb/zyQgghhBCCzHgBfaiOejzs1lYAAAAASUVORK5CYII="
              />
            </span>
            <span className="flex-1">
              <p>Internal Payment</p>
              <p>Expiry 06/2004</p>
            </span>
            <span className="">
              <p className="text-red-600">- $192.00</p>
            </span>
          </li>
          <li className="transaction gap-2 mb-2 border-b-slate-300 flex">
            <span className="inline-block self-center">
              <Image
                width={32}
                height={32}
                alt="credit card icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO2aWwrCMBBFzzJ87ER0BSruxvovBTflY0s+fvyKCOlPSa0R2o7JPXAhpRmY3E4y+SgIIYQQQghRsQEuwANwiei9ljOwpoWDgWS7Vvnpy7tMtAoZcDGQWF86hQy4G0isL91CBrjMJANUATWGLkltAXQGoEMQdQHUBtE9AHMXoSewBSYNwc6/K/zc5AwoavNCsRVFigaMIwwYpWiAawkeejGdG0BEBVTP1hVchAzguwr4dc7fVsAkYgtMc2+DuxQNeHoTsr0IuQQlA1QBNYYuSW0BdAagQxB1AUy1wRkwjxhbj4k2oOLbsfWYaAPmwCJibD0m2gCXsGSAKiDjX2SuBDgbSKwvHUMGrA0k1peWNFAaSK5r7Wlh5f+jS+lMuPuyb/zyQgghhBCCzHgBfaiOejzs1lYAAAAASUVORK5CYII="
              />
            </span>
            <span className="flex-1">
              <p>Internal Payment</p>
              <p>Expiry 06/2004</p>
            </span>
            <span className="">
              <p className="text-green-600">+ $262.00</p>
            </span>
          </li>
          <li className="transaction gap-2 mb-2 border-b-slate-300 flex">
            <span className="inline-block self-center">
              <Image
                width={32}
                height={32}
                alt="credit card icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO2aWwrCMBBFzzJ87ER0BSruxvovBTflY0s+fvyKCOlPSa0R2o7JPXAhpRmY3E4y+SgIIYQQQghRsQEuwANwiei9ljOwpoWDgWS7Vvnpy7tMtAoZcDGQWF86hQy4G0isL91CBrjMJANUATWGLkltAXQGoEMQdQHUBtE9AHMXoSewBSYNwc6/K/zc5AwoavNCsRVFigaMIwwYpWiAawkeejGdG0BEBVTP1hVchAzguwr4dc7fVsAkYgtMc2+DuxQNeHoTsr0IuQQlA1QBNYYuSW0BdAagQxB1AUy1wRkwjxhbj4k2oOLbsfWYaAPmwCJibD0m2gCXsGSAKiDjX2SuBDgbSKwvHUMGrA0k1peWNFAaSK5r7Wlh5f+jS+lMuPuyb/zyQgghhBCCzHgBfaiOejzs1lYAAAAASUVORK5CYII="
              />
            </span>
            <span className="flex-1">
              <p>Internal Payment</p>
              <p>Expiry 06/2004</p>
            </span>
            <span className="">
              <p className="text-green-600">+ $262.00</p>
            </span>
          </li>
          <li className="transaction gap-2 mb-2 border-b-slate-300 flex">
            <span className="inline-block self-center">
              <Image
                width={32}
                height={32}
                alt="credit card icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO2aWwrCMBBFzzJ87ER0BSruxvovBTflY0s+fvyKCOlPSa0R2o7JPXAhpRmY3E4y+SgIIYQQQghRsQEuwANwiei9ljOwpoWDgWS7Vvnpy7tMtAoZcDGQWF86hQy4G0isL91CBrjMJANUATWGLkltAXQGoEMQdQHUBtE9AHMXoSewBSYNwc6/K/zc5AwoavNCsRVFigaMIwwYpWiAawkeejGdG0BEBVTP1hVchAzguwr4dc7fVsAkYgtMc2+DuxQNeHoTsr0IuQQlA1QBNYYuSW0BdAagQxB1AUy1wRkwjxhbj4k2oOLbsfWYaAPmwCJibD0m2gCXsGSAKiDjX2SuBDgbSKwvHUMGrA0k1peWNFAaSK5r7Wlh5f+jS+lMuPuyb/zyQgghhBCCzHgBfaiOejzs1lYAAAAASUVORK5CYII="
              />
            </span>
            <span className="flex-1">
              <p>Internal Payment</p>
              <p>Expiry 06/2004</p>
            </span>
            <span className="">
              <p className="text-red-600">- $192.00</p>
            </span>
          </li>
        </ul>
      </div>
      <div className="fadeOut bg-gradient-to-t from-white via-white to-transparent absolute right-0 left-0 bottom-3 h-14"></div>
    </div>
  );
}
