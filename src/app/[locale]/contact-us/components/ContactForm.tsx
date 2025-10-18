'use client';
import { FormEvent, useState } from 'react';

import { Card, CardBody } from '@heroui/card';
import { Form } from '@heroui/form';
import { Button } from '@heroui/button';
import { Input, Textarea } from '@heroui/input';

import { Send } from 'lucide-react';
import { ClassNameValue } from 'tailwind-merge';
import { cn } from '@/shared/utils/cn';
import z from 'zod';
import { addToast } from '@heroui/toast';
import { useTranslations } from 'next-intl';

async function postForm(formData: Record<string, string>) {
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const initialFormState: Record<string, string> = {
  access_key: 'b437479c-c908-4d3e-83f7-f4552ebe5bf1',
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactForm({ className }: { className?: ClassNameValue }) {
  const [formData, setFormData] = useState({ ...initialFormState });
  const [isLoading, setIsLoading] = useState(false);

  const t = useTranslations('ContactUsPage');

  const nameSchema = z.string().min(3, t('formErrors.name.min')).max(50, t('formErrors.name.max'));
  const emailSchema = z.email(t('formErrors.email.invalid'));
  const subjectSchema = z
    .string()
    .min(3, t('formErrors.subject.min'))
    .max(100, t('formErrors.subject.max'));
  const messageSchema = z
    .string()
    .min(10, t('formErrors.message.min'))
    .max(1000, t('formErrors.message.max'));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const success = await postForm(formData);
    if (success) {
      addToast({
        color: 'success',
        title: t('formToast.success.title'),
        description: t('formToast.success.description'),
      });
    } else {
      addToast({
        color: 'danger',
        title: t('formToast.failure.title'),
        description: t('formToast.failure.description'),
      });
    }

    setIsLoading(false);
    setFormData({ ...initialFormState });
  }

  return (
    <Card className={cn('w-full', className)}>
      <CardBody>
        <Form onSubmit={onSubmit} className='space-y-4'>
          <div className='flex w-full flex-col gap-4 lg:flex-row'>
            <Input
              classNames={{ errorMessage: 'block' }}
              variant='faded'
              radius='lg'
              name='name'
              label={t('formLabels.name')}
              value={formData.name}
              validate={(value) => {
                try {
                  nameSchema.parse(value);
                  return null;
                } catch (error) {
                  if (error instanceof z.ZodError) {
                    return error.issues[0].message;
                  }
                  return t('formErrors.name.generic');
                }
              }}
              onValueChange={(value) => setFormData({ ...formData, name: value })}
            />
            <Input
              variant='faded'
              radius='lg'
              name='email'
              type='email'
              label={t('formLabels.email')}
              value={formData.email}
              validate={(value) => {
                try {
                  emailSchema.parse(value);
                  return null;
                } catch (error) {
                  if (error instanceof z.ZodError) {
                    return error.issues[0].message;
                  }
                  return t('formErrors.email.invalid');
                }
              }}
              onValueChange={(value) => setFormData({ ...formData, email: value })}
            />
          </div>
          <Input
            variant='faded'
            radius='lg'
            name='subject'
            label={t('formLabels.subject')}
            value={formData.subject}
            validate={(value) => {
              try {
                subjectSchema.parse(value);
                return null;
              } catch (error) {
                if (error instanceof z.ZodError) {
                  return error.issues[0].message;
                }
                return t('formErrors.subject.generic');
              }
            }}
            onValueChange={(value) => setFormData({ ...formData, subject: value })}
          />
          <Textarea
            variant='faded'
            radius='lg'
            name='message'
            label={t('formLabels.message')}
            minRows={4}
            maxRows={4}
            value={formData.message}
            validate={(value) => {
              try {
                messageSchema.parse(value);
                return null;
              } catch (error) {
                if (error instanceof z.ZodError) {
                  return error.issues[0].message;
                }
                return t('formErrors.message.generic');
              }
            }}
            onValueChange={(value) => setFormData({ ...formData, message: value })}
          />
          <Button
            isLoading={isLoading}
            color='primary'
            endContent={<Send className='size-[1.25em]' />}
            radius='lg'
            variant='faded'
            className='w-full'
            type='submit'>
            {t('sendMessage')}
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}
