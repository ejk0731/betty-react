import fs from 'node:fs';
import Layout from '@/components/Layout/Layout';
import styles from './page.module.scss';
import ImagePicker from '@/components/ImagePicker/ImagePicker';
import { sendFaq } from '@/lib/actions';

export default function Faq() {
  return (
    <>
      <Layout>
        <div className={styles.wrap}>
          <form className={styles.form} action={sendFaq}>
            <div className={styles.row}>
              <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" required />
              </p>
              <p>
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" name="email" required />
              </p>
            </div>
            <p>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" required />
            </p>
            <p>
              <label htmlFor="summary">Short Summary</label>
              <input type="text" id="summary" name="summary" required />
            </p>
            <p>
              <label htmlFor="instructions">Instructions</label>
              <textarea
                id="instructions"
                name="instructions"
                rows={10}
                required
              ></textarea>
            </p>
            <ImagePicker label={'image'} name={'image'} />
            <p className={styles.actions}>
              <button type="submit">Share Meal</button>
            </p>
          </form>
        </div>
      </Layout>
    </>
  );
}
